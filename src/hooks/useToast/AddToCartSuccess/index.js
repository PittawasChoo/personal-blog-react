import React from "react";
import PropTypes from "prop-types";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScButton,
    ScHeaderContainer,
    ScProductContainer,
    ScProductDetailContainer,
    ScProductImage,
    ScProductLabelPrimary,
    ScProductLabelSecondary,
    ScProductPriceBefore,
    ScProductPriceContainer,
} from "./styles";

const AddToCartSuccess = ({ addedProduct, productsCount }) => {
    const navigate = useNavigate();

    return (
        <div>
            <ScHeaderContainer>
                <CheckCircleIcon style={{ color: "#16b92b" }} />
                <b>Added to Cart</b>
            </ScHeaderContainer>

            <ScProductContainer>
                <ScProductImage $imgUrl={`http://localhost:3001/images/${addedProduct.imgName}`} />
                <ScProductDetailContainer>
                    <ScProductLabelPrimary>{addedProduct.name}</ScProductLabelPrimary>
                    <ScProductLabelSecondary>{addedProduct.brand}</ScProductLabelSecondary>
                    <ScProductLabelSecondary>Size: {addedProduct.size}</ScProductLabelSecondary>
                    <ScProductPriceContainer>
                        <ScProductLabelPrimary>
                            $
                            {addedProduct.promotionPrice
                                ? FormatToLocaleString(Number(addedProduct.promotionPrice))
                                : FormatToLocaleString(Number(addedProduct.price))}
                        </ScProductLabelPrimary>
                        {addedProduct.promotionPrice && (
                            <ScProductPriceBefore>
                                ${FormatToLocaleString(Number(addedProduct.price))}
                            </ScProductPriceBefore>
                        )}
                    </ScProductPriceContainer>
                </ScProductDetailContainer>
            </ScProductContainer>

            <ScButton onClick={() => navigate("/cart")}>View Cart ({productsCount})</ScButton>
        </div>
    );
};

AddToCartSuccess.propTypes = {
    addedProduct: PropTypes.object.isRequired,
    productsCount: PropTypes.number.isRequired,
};

export default AddToCartSuccess;
