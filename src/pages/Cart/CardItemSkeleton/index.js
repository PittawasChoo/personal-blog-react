import React from "react";
import PropTypes from "prop-types";

import {
    ScLine,
    ScProductBrand,
    ScProductContainer,
    ScProductDetailContainer,
    ScProductImage,
    ScProductName,
    ScProductPrice,
    ScProductPriceContainer,
    ScProductSize,
    ScQuantityContainer,
} from "./styles";

const CartItemSkeleton = ({ product, cart }) => {
    return (
        <>
            <ScProductContainer>
                <ScProductImage />

                <ScProductDetailContainer>
                    <div>
                        <ScProductName />
                        <ScProductBrand />
                    </div>
                    <ScProductSize />
                </ScProductDetailContainer>

                <div>
                    <ScQuantityContainer />
                </div>

                <ScProductPriceContainer>
                    <ScProductPrice />
                </ScProductPriceContainer>
            </ScProductContainer>
            <ScLine />
        </>
    );
};

CartItemSkeleton.propTypes = {
    product: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
};

export default CartItemSkeleton;
