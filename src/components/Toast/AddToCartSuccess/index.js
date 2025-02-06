import React from "react";
import PropTypes from "prop-types";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

import { formatToLocaleString } from "modules/number/formatToLocaleString";

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

const AddToCartSuccess = ({ onClose, addedProduct, productsCount }) => {
    const navigate = useNavigate();

    const viewCart = () => {
        navigate("/cart");
        onClose();
    };

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
                                ? formatToLocaleString(Number(addedProduct.promotionPrice))
                                : formatToLocaleString(Number(addedProduct.price))}
                        </ScProductLabelPrimary>
                        {addedProduct.promotionPrice && (
                            <ScProductPriceBefore>
                                ${formatToLocaleString(Number(addedProduct.price))}
                            </ScProductPriceBefore>
                        )}
                    </ScProductPriceContainer>
                </ScProductDetailContainer>
            </ScProductContainer>

            <ScButton onClick={viewCart}>View Cart ({productsCount})</ScButton>
        </div>
    );
};

AddToCartSuccess.propTypes = {
    onClose: PropTypes.func.isRequired,
    addedProduct: PropTypes.object.isRequired,
    productsCount: PropTypes.number.isRequired,
};

export default AddToCartSuccess;
