import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { get, orderBy } from "lodash";
import { useQuery } from "@tanstack/react-query";

import { formatTimestamp } from "modules/date/formatTimestamp";
import { formatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScHistoryDate,
    ScHistoryItemContainer,
    ScHistoryItems,
    ScHistoryListContainer,
    ScHistoryTotalPrice,
    ScHistoryTotalView,
    ScNotFullyLoadedContainer,
    ScTableHeaderContainer,
    ScTableHeaderItems,
    ScTableHeaderTotalPrice,
} from "./styles";
import ErrorRetry from "components/ErrorRetry";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const HistoryList = ({ setModal }) => {
    const {
        data,
        isError,
        isFetching: isLoading,
        refetch,
    } = useQuery({
        queryKey: ["history"],
        queryFn: async () => {
            const response = await fetch(`${BACKEND_URL}/history`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });
            return await response.json();
        },
    });

    if (isLoading)
        return (
            <ScNotFullyLoadedContainer>
                <CircularProgress size="60px" />
            </ScNotFullyLoadedContainer>
        );

    if (isError) {
        return (
            <ScNotFullyLoadedContainer>
                <ErrorRetry label="order history" onRefetch={refetch} size="l" />
            </ScNotFullyLoadedContainer>
        );
    }
    const history = get(data, "history", []);
    const orderedHistory = orderBy(history, "timestamp", "desc");

    return (
        <>
            <ScTableHeaderContainer>
                <div>DATE</div>
                <ScTableHeaderItems>ITEMS</ScTableHeaderItems>
                <ScTableHeaderTotalPrice>TOTAL PRICE</ScTableHeaderTotalPrice>
            </ScTableHeaderContainer>
            <ScHistoryListContainer>
                {orderedHistory.map((historyItem, index) => {
                    const itemsCount = historyItem.products.reduce((acc, cur) => {
                        return acc + cur.quantity;
                    }, 0);
                    return (
                        <ScHistoryItemContainer
                            $isLastItem={index === history.length - 1}
                            key={historyItem.id}
                        >
                            <ScHistoryDate>{formatTimestamp(historyItem.timestamp)}</ScHistoryDate>
                            <ScHistoryItems>{itemsCount}</ScHistoryItems>
                            <ScHistoryTotalPrice>
                                $ {formatToLocaleString(Number(historyItem.totalPrice))}
                            </ScHistoryTotalPrice>
                            <ScHistoryTotalView>
                                <Button
                                    onClick={() =>
                                        setModal({
                                            showModal: true,
                                            shippingDetail: {
                                                ...historyItem.shippingInfo,
                                                ...historyItem.customerInfo,
                                            },
                                            products: historyItem.products,
                                            totalPrice: historyItem.totalPrice,
                                            date: historyItem.timestamp,
                                        })
                                    }
                                >
                                    View
                                </Button>
                            </ScHistoryTotalView>
                        </ScHistoryItemContainer>
                    );
                })}
            </ScHistoryListContainer>
        </>
    );
};

HistoryList.propTypes = {
    HistoryList: PropTypes.func.isRequired,
};

export default HistoryList;
