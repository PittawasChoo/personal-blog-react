import React from "react";

import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";

import BigCard from "components/Card/BigCard";
import ErrorRetry from "components/ErrorRetry";
import Skeleton from "components/Card/Skeleton";

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

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const RecommendProducts = () => {
    const {
        data: recommendProducts,
        isError: isLoadingRecommendError,
        isFetching: isLoadingRecommend,
        refetch: refetchRecommend,
    } = useQuery({
        queryKey: ["recommend"],
        queryFn: async () => {
            const response = await fetch(`${BACKEND_URL}/recommend`, {
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

            {isLoadingRecommendError ? (
                <div
                    style={{
                        height: "450px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <ErrorRetry label="recommend products" onRetry={refetchRecommend} size="l" />
                </div>
            ) : (
                <ScCardsContainer>
                    {isLoadingRecommend
                        ? Array.apply(null, { length: 4 }).map((e, i) => <Skeleton key={i} />)
                        : products.map((product) => {
                              return (
                                  <BigCard
                                      key={product.id}
                                      id={product.id}
                                      imgUrl={`${BACKEND_URL}/images/${product.imgName}`}
                                      brand={product.brand}
                                      name={product.name}
                                      price={Number(product.price)}
                                      promotionPrice={Number(product.promotionPrice)}
                                  />
                              );
                          })}
                </ScCardsContainer>
            )}

            <ScBottomArtContainer>
                <ScLine />
                <ScSmallDot />
                <ScSmallDot />
            </ScBottomArtContainer>
        </ScRoot>
    );
};

export default RecommendProducts;
