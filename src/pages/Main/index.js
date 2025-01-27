import React from "react";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import Marquee from "./Marquee";
import ProductCarousel from "./ProductCarousel";
import Trending from "./Trending";

import { ScBanner2Container, ScFooterContainer, ScRoot, ScTrendingContainer } from "./styles";

import trendingOb from "./trending-ob.json";
import newArrival from "./new-arrival.json";
import promotion from "./promotion.json";

const Main = () => {
    return (
        <ScRoot>
            <Navbar />
            <Banner />
            <Marquee />

            <ScTrendingContainer>
                <Trending items={trendingOb || []} />
            </ScTrendingContainer>

            <ProductCarousel header="NEW ARRIVAL" items={newArrival || []} />

            <ScBanner2Container>
                <Marquee />
                <Banner2 />
                <Marquee reverse />
            </ScBanner2Container>

            <ProductCarousel header="PROMOTION" items={promotion || []} />
            <ScFooterContainer>
                <Footer />
            </ScFooterContainer>
        </ScRoot>
    );
};

export default Main;
