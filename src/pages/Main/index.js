import React from "react";

import { get } from "lodash";
import { useQuery } from "@tanstack/react-query";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import RecommendProducts from "components/RecommendProducts";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import Marquee from "./Marquee";
import ProductCarousel from "./ProductCarousel";

import { ScBanner2Container, ScFooterContainer, ScRoot, ScTrendingContainer } from "./styles";

const Main = () => {
    const {
        data: newArrivalData,
        isError: isErrorFetchingNewArrival,
        isFetching: isFetchingNewArrival,
        refetch: refetchNewArrival,
    } = useQuery({
        queryKey: ["new-arrival"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/new-arrival", {
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
        isError: isErrorFetchingPromotion,
        isFetching: isFetchingPromotion,
        refetch: refetchPromotion,
    } = useQuery({
        queryKey: ["promotion"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/promotion", {
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

            <ProductCarousel header="NEW ARRIVAL" products={newArrival} linkTo="/new-arrival" />

            <ScBanner2Container>
                <Marquee />
                <Banner2 />
                <Marquee reverse />
            </ScBanner2Container>

            <ProductCarousel header="PROMOTION" products={promotion} linkTo="/promotion" />
        </>
    );
};

export default Main;
