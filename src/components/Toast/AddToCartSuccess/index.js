import React from "react";
import PropTypes from "prop-types";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

import LazyImage from "components/LazyImage";
import { formatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScButton,
    ScHeaderContainer,
    ScProductContainer,
    ScProductDetailContainer,
    ScProductLabelPrimary,
    ScProductLabelSecondary,
    ScProductPriceBefore,
    ScProductPriceContainer,
} from "./styles";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
                <LazyImage
                    src={`${BACKEND_URL}/images/${addedProduct.imgName}`}
                    alt={`product-${addedProduct.id}-image`}
                    style={{
                        width: "100px",
                        height: "100px",
                        flexShrink: 0,
                        borderRadius: "5px",
                        overflow: "hidden",
                    }}
                />
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
