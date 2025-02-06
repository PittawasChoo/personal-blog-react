import React from "react";

import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";

import RecommendProducts from "components/RecommendProducts";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import Marquee from "./Marquee";
import ProductCarousel from "./ProductCarousel";

import { ScBanner2Container, ScTrendingContainer } from "./styles";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Main = () => {
    const {
        data: newArrivalData,
        isError: isLoadingNewArrivalError,
        isFetching: isLoadingNewArrival,
        refetch: refetchNewArrival,
    } = useQuery({
        queryKey: ["new-arrival"],
        queryFn: async () => {
            const response = await fetch(`${BACKEND_URL}/new-arrival`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    limit: 12,
                }),
            });
            return await response.json();
        },
    });

    const {
        data: promotionData,
        isError: isLoadingPromotionError,
        isFetching: isLoadingPromotion,
        refetch: refetchPromotion,
    } = useQuery({
        queryKey: ["promotion"],
        queryFn: async () => {
            const response = await fetch(`${BACKEND_URL}/promotion`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    limit: 12,
                }),
            });
            return await response.json();
        },
    });

    const newArrival = get(newArrivalData, "products", []);
    const promotion = get(promotionData, "products", []);

    return (
        <>
            <Banner />
            <Marquee />

            <ScTrendingContainer>
                <RecommendProducts />
            </ScTrendingContainer>

            <ProductCarousel
                isLoading={isLoadingNewArrival}
                isError={isLoadingNewArrivalError}
                retry={refetchNewArrival}
                header="new arrival"
                products={newArrival}
                linkTo="/new-arrival"
            />

            <ScBanner2Container>
                <Marquee />
                <Banner2 />
                <Marquee reverse />
            </ScBanner2Container>

            <ProductCarousel
                isLoading={isLoadingPromotion}
                isError={isLoadingPromotionError}
                retry={refetchPromotion}
                header="promotion"
                products={promotion}
                linkTo="/promotion"
            />
        </>
    );
};

export default Main;
