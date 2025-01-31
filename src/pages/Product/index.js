import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

import RecommendProducts from "components/RecommendProducts";

import ProductBody from "./ProductBody";
import { ScBody, ScRecommendProductsContainer, ScSection } from "./styles";

const Product = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    return (
        <>
            <ScBody>
                <ProductBody />
            </ScBody>
            <ScSection>
                <ScRecommendProductsContainer>
                    <RecommendProducts />
                </ScRecommendProductsContainer>
            </ScSection>
        </>
    );
};

export default Product;
