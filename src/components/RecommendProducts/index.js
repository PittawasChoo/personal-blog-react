import React from "react";

import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";

import BigCard from "components/Card/BigCard";

import {
    ScBottomArtContainer,
    ScCardsContainer,
    ScDot,
    ScDotsContainer,
    ScHeaderContainer,
    ScHeaderLabel,
    ScLine,
    ScRoot,
    ScSmallDot,
} from "./styles";

const RecommendProducts = () => {
    const {
        data: recommendProducts,
        isError: isErrorFetchingRecommend,
        isFetching: isFetchingRecommend,
        refetch: refetchRecommend,
    } = useQuery({
        queryKey: ["recommend"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/recommend", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return await response.json();
        },
    });

    const products = get(recommendProducts, "products", []);

    return (
        <ScRoot>
            <ScHeaderContainer>
                <ScHeaderLabel>Recommend</ScHeaderLabel>
                <ScDotsContainer>
                    <ScDot />
                    <ScDot />
                    <ScDot />
                    <ScDot />
                </ScDotsContainer>
            </ScHeaderContainer>

            <ScCardsContainer>
                {products.map((product) => {
                    return (
                        <BigCard
                            key={product.id}
                            id={product.id}
                            imgUrl={`http://localhost:3001/images/${product.imgName}`}
                            brand={product.brand}
                            name={product.name}
                            price={Number(product.price)}
                            promotionPrice={Number(product.promotionPrice)}
                        />
                    );
                })}
            </ScCardsContainer>

            <ScBottomArtContainer>
                <ScLine />
                <ScSmallDot />
                <ScSmallDot />
            </ScBottomArtContainer>
        </ScRoot>
    );
};

export default RecommendProducts;
