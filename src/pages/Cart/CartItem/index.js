import React from "react";
import PropTypes from "prop-types";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScLine,
    ScPriceBeforePromotion,
    ScProductBrand,
    ScProductContainer,
    ScProductDetailContainer,
    ScProductImage,
    ScProductName,
    ScProductPrice,
    ScProductPriceContainer,
    ScProductSize,
    ScQuantityButton,
    ScQuantityContainer,
    ScQuantityInput,
    ScQuantityInputContainer,
    ScTextLink,
} from "./styles";

const CartItem = ({ product }) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const getMaxQuantity = () => {
        const productStock = cart.find((item) => item.id === product.id).stock;
        const sizeStock = productStock.find((stock) => stock.size === product.size).stock;

        return sizeStock;
    };

    const updateCart = (quantityFunction) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const updatedProduct = cart.find(
            (productInCart) =>
                productInCart.id === product.id && productInCart.size === product.size
        );

        let newCart = cart.filter(
            (productInCart) =>
                !(productInCart.id === product.id && productInCart.size === product.size)
        );

        const newQuantity = quantityFunction(updatedProduct.quantity);
        console.log("newQuantity", newQuantity);

        const enhancedUpdatedProduct = {
            ...updatedProduct,
            quantity: newQuantity,
        };

        newCart.push(enhancedUpdatedProduct);
        localStorage.setItem("cart", JSON.stringify(newCart));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    const removeFromCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const newCart = cart.filter(
            (productInCart) =>
                !(productInCart.id === product.id && productInCart.size === product.size)
        );

        localStorage.setItem("cart", JSON.stringify(newCart));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <>
            <ScProductContainer>
                <ScTextLink to={`/product?id=${product.id}`}>
                    <ScProductImage $imgUrl={`http://localhost:3001/images/${product.imgName}`} />
                </ScTextLink>

                <ScProductDetailContainer>
                    <div>
                        <ScTextLink to={`/product?id=${product.id}`}>
                            <ScProductName>{product.name}</ScProductName>
                        </ScTextLink>
                        <ScProductBrand>{product.brand}</ScProductBrand>
                    </div>
                    <ScProductSize>SIZE: {product.size}</ScProductSize>
                </ScProductDetailContainer>

                <div>
                    <ScQuantityContainer>
                        <ScQuantityButton
                            onClick={() => {
                                if (product.quantity > 1) {
                                    updateCart((quantity) => quantity - 1);
                                } else {
                                    removeFromCart();
                                }
                            }}
                        >
                            <img
                                src={
                                    product.quantity === 1
                                        ? "/images/shared/trash.png"
                                        : "/images/shared/minus.png"
                                }
                                alt={product.quantity === 1 ? "remove" : "minus"}
                                width={16}
                                height={16}
                            />
                        </ScQuantityButton>
                        <ScQuantityInputContainer>
                            <ScQuantityInput>{product.quantity}</ScQuantityInput>
                        </ScQuantityInputContainer>
                        <ScQuantityButton
                            onClick={() => {
                                const max = getMaxQuantity();

                                if (product.quantity < max) {
                                    updateCart((quantity) => quantity + 1);
                                }
                            }}
                        >
                            <img src="/images/shared/plus.png" alt="plus" width={16} height={16} />
                        </ScQuantityButton>
                    </ScQuantityContainer>
                </div>

                <ScProductPriceContainer>
                    <ScProductPrice $hasPromotionPrice={!!product.promotionPrice}>
                        $ {FormatToLocaleString(Number(product.promotionPrice || product.price))}
                    </ScProductPrice>
                    {product.promotionPrice && (
                        <ScPriceBeforePromotion>
                            $ {FormatToLocaleString(Number(product.price))}
                        </ScPriceBeforePromotion>
                    )}
                </ScProductPriceContainer>
            </ScProductContainer>
            <ScLine />
        </>
    );
};

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CartItem;
