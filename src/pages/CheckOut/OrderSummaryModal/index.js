import React from "react";

import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScRoot,
    ScSummaryHeader,
    ScRecieptHeader,
    ScAddressHeader,
    ScRecieptDetailContainer,
    ScRecieptDetailRow,
    ScRecieptDetailHeader,
    ScTableContainer,
    ScQtyHeader,
    ScProductHeader,
    ScUnitHeader,
    ScAmountHeader,
    ScTableItemContainer,
    ScQty,
    ScProduct,
    ScUnit,
    ScAmount,
    ScTableUnderLine,
    ScSummaryContainer,
    ScSummaryRow,
    ScSummaryBoxHeader,
    ScSummaryBoxValue,
    ScSummaryBoxLine,
    ScSummaryBoxTotalHeader,
    ScSummaryBoxUnderLine,
} from "./styles";

const OrderSummaryModal = ({ isModalOpen, orderSummary, cart, onClose }) => {
    const navigate = useNavigate();

    const getSubtotalPrice = () => {
        return cart.reduce((acc, cur) => {
            const productPrice = cur.promotionPrice || cur.price;
            return acc + productPrice * cur.quantity;
        }, 0);
    };

    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ["purchase", orderSummary, cart],
        mutationFn: async ({
            email,
            firstName,
            lastName,
            phoneNumber,
            address,
            address2,
            province,
            postalCode,
        }) => {
            const response = await fetch("http://localhost:3001/purchase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
                body: JSON.stringify({
                    products: cart.map((product) => ({
                        id: product.id,
                        size: product.size,
                        quantity: product.quantity,
                    })),
                    customerDetail: {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phoneNumber: phoneNumber,
                    },
                    shippingDetail: {
                        address: address,
                        address2: address2,
                        province: province,
                        postalCode: postalCode,
                    },
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Register failed");
            }

            return await response.json();
        },
        onSuccess: (data) => {
            navigate("/purchase-success");
        },
    });

    return (
        <Modal open={isModalOpen} onClose={onClose}>
            <ScRoot>
                <ScSummaryHeader>ORDER SUMMARY</ScSummaryHeader>
                <ScRecieptHeader>
                    <div>
                        <ScAddressHeader>Ship To</ScAddressHeader>
                        <div>
                            {orderSummary.firstName} {orderSummary.lastName}
                        </div>
                        <div>{orderSummary.address}</div>
                        {orderSummary.address2 && <div>{orderSummary.address2}</div>}
                        <div>
                            {orderSummary.province}, {orderSummary.postalCode}
                        </div>
                    </div>

                    <ScRecieptDetailContainer>
                        <ScRecieptDetailRow>
                            <ScRecieptDetailHeader>Reciept #</ScRecieptDetailHeader>
                            <div>XXXXXXXX</div>
                        </ScRecieptDetailRow>
                        <ScRecieptDetailRow>
                            <ScRecieptDetailHeader>Reciept Date</ScRecieptDetailHeader>
                            <div>{dayjs().format("DD MMMM YYYY")}</div>
                        </ScRecieptDetailRow>
                    </ScRecieptDetailContainer>
                </ScRecieptHeader>
                <ScTableContainer>
                    <ScQtyHeader>Qty</ScQtyHeader>
                    <ScProductHeader>Product</ScProductHeader>
                    <ScUnitHeader>Unit Price</ScUnitHeader>
                    <ScAmountHeader>Amount</ScAmountHeader>
                </ScTableContainer>
                <div>
                    {cart.map((product) => {
                        const productPrice = product.promotionPrice || product.price;
                        return (
                            <ScTableItemContainer>
                                <ScQty>{product.quantity}</ScQty>
                                <ScProduct>{product.name}</ScProduct>
                                <ScUnit>$ {FormatToLocaleString(Number(productPrice))}</ScUnit>
                                <ScAmount>
                                    ${" "}
                                    {FormatToLocaleString(Number(productPrice * product.quantity))}
                                </ScAmount>
                            </ScTableItemContainer>
                        );
                    })}
                </div>
                <ScTableUnderLine />
                <ScSummaryContainer>
                    <div>
                        <ScSummaryRow>
                            <ScSummaryBoxHeader>Subtotal</ScSummaryBoxHeader>
                            <ScSummaryBoxValue>
                                $ {FormatToLocaleString(Number(getSubtotalPrice()))}
                            </ScSummaryBoxValue>
                        </ScSummaryRow>
                        <ScSummaryRow>
                            <ScSummaryBoxHeader>Delivery Fee</ScSummaryBoxHeader>
                            <ScSummaryBoxValue>Free</ScSummaryBoxValue>
                        </ScSummaryRow>
                        <ScSummaryBoxLine />
                        <ScSummaryRow>
                            <ScSummaryBoxTotalHeader>Total</ScSummaryBoxTotalHeader>
                            <ScSummaryBoxValue>
                                $ {FormatToLocaleString(Number(getSubtotalPrice()))}
                            </ScSummaryBoxValue>
                        </ScSummaryRow>
                        <ScSummaryBoxUnderLine />
                    </div>
                </ScSummaryContainer>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "50px",
                    }}
                >
                    <Button
                        style={{
                            padding: "4px 20px",
                            backgroundColor: isPending ? "#11111170" : "#111111",
                            color: "white",
                            borderRadius: "5px",
                            cursor: isPending ? "not-allowed" : "pointer",
                        }}
                        disabled={isPending}
                        onClick={() =>
                            mutate({
                                email: orderSummary.email,
                                firstName: orderSummary.firstName,
                                lastName: orderSummary.lastName,
                                phoneNumber: orderSummary.phoneNumber,
                                address: orderSummary.address,
                                address2: orderSummary.address2,
                                province: orderSummary.province,
                                postalCode: orderSummary.postalCode,
                            })
                        }
                    >
                        {isPending ? (
                            <>
                                <CircularProgress
                                    size="14px"
                                    style={{ color: "grey", marginRight: "20px" }}
                                />{" "}
                                Purchasing...
                            </>
                        ) : (
                            "Purchase"
                        )}
                    </Button>
                </div>
            </ScRoot>
        </Modal>
    );
};

export default OrderSummaryModal;
