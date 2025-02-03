import React, { useContext, useEffect } from "react";

import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";

import BigCard from "components/Card/BigCard";
import ErrorRetry from "components/ErrorRetry";
import Skeleton from "components/Card/Skeleton";

import { FilterContext } from "contexts/FilterContext";

import useDebounceLoading from "hooks/useDebounceLoading";

import {
    ScBody,
    ScBodyContainer,
    ScCardContainer,
    ScNoItemBody,
    ScNoItemBodyContainer,
} from "./styles";

const Products = ({ page, setCurrentPage, setPageCount, setShowPagination }) => {
    const { searchParam, selectedBrands, selectedSizes, selectedTypes, sortBy } =
        useContext(FilterContext);

    const {
        data,
        isError,
        isFetching: isLoading,
        refetch,
    } = useQuery({
        queryKey: [
            "new-arrival",
            searchParam,
            selectedBrands,
            selectedSizes,
            selectedTypes,
            sortBy,
            page,
        ],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/new-arrival", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    search: searchParam,
                    brands: selectedBrands,
                    sizes: selectedSizes,
                    types: selectedTypes,
                    sortBy: sortBy,
                    page: page,
                }),
            });
            return await response.json();
        },
    });

    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });

        const resPageCount = get(data, "pageCount", 1);
        setPageCount(resPageCount);
        const resCurrentPage = get(data, "currentPage", 1);
        setCurrentPage(resCurrentPage);

        if (get(data, "products", []).length <= 0 || isError) {
            setShowPagination(false);
        } else {
            setShowPagination(true);
        }
    }, [
        searchParam,
        selectedBrands,
        selectedSizes,
        selectedTypes,
        sortBy,
        page,
        data,
        isError,
        setCurrentPage,
        setPageCount,
        setShowPagination,
    ]);

    const products = get(data, "products", []);
    const shouldShowLoading = useDebounceLoading(isLoading, 1000);

    if (shouldShowLoading) {
        return (
            <ScBodyContainer>
                <ScBody>
                    {Array.apply(null, { length: 20 }).map((e, i) => (
                        <ScCardContainer key={i}>
                            <Skeleton />
                        </ScCardContainer>
                    ))}
                </ScBody>
            </ScBodyContainer>
        );
    }

    if (isError) {
        return (
            <ScNoItemBodyContainer>
                <ScNoItemBody>
                    <ErrorRetry label="products" onRetry={refetch} size="l" />
                </ScNoItemBody>
            </ScNoItemBodyContainer>
        );
    }

    if (products.length === 0) {
        return (
            <ScNoItemBodyContainer>
                <ScNoItemBody>No new arrival products found.</ScNoItemBody>
            </ScNoItemBodyContainer>
        );
    }

    return (
        <ScBodyContainer>
            <ScBody>
                {products.map((product) => {
                    return (
                        <ScCardContainer key={product.id}>
                            <BigCard
                                id={product.id}
                                imgUrl={`http://localhost:3001/images/${product.imgName}`}
                                brand={product.brand}
                                name={product.name}
                                price={Number(product.price)}
                                promotionPrice={Number(product.promotionPrice)}
                            />
                        </ScCardContainer>
                    );
                })}
            </ScBody>
        </ScBodyContainer>
    );
};

export default Products;
