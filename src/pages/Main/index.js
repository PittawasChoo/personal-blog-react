import React from "react";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Banner from "./Banner";
import Banner2 from "./Banner2";
import Marquee from "./Marquee";
import Trending from "./Trending";
import ProductCarousel from "./ProductCarousel";

import { ScBanner2Container, ScFooterContainer, ScRoot, ScTrendingContainer } from "./styles";

const Main = () => {
    return (
        <ScRoot>
            <Navbar />
            <Banner />
            <Marquee />

            <ScTrendingContainer>
                <Trending />
            </ScTrendingContainer>

            <ProductCarousel header="NEW ARRIVAL" />

            <ScBanner2Container>
                <Marquee />
                <Banner2 />
                <Marquee reverse />
            </ScBanner2Container>

            <ProductCarousel header="PROMOTION" />
            <ScFooterContainer>
                <Footer />
            </ScFooterContainer>
        </ScRoot>
    );
};

export default Main;
