import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import RecommendProducts from "components/RecommendProducts";

import ProductBody from "./ProductBody";
import {
    ScBody,
    ScNavbarSpaceReserve,
    ScRecommendProductsContainer,
    ScRoot,
    ScSection,
} from "./styles";

const Product = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    return (
        <ScRoot>
            <Navbar alwaysShowBackground />
            <ScNavbarSpaceReserve />

            <ScBody>
                <ProductBody />
            </ScBody>
            <ScSection>
                <ScRecommendProductsContainer>
                    <RecommendProducts />
                </ScRecommendProductsContainer>
            </ScSection>

            <Footer />
        </ScRoot>
    );
};

export default Product;
