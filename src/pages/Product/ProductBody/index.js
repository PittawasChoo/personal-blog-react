import React, { useState } from "react";

import { get } from "lodash";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import ErrorRetry from "components/ErrorRetry";

import useToast from "hooks/useToast";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScAddToCartButton,
    ScBeforePromotionPrice,
    ScBodyContainer,
    ScBrand,
    ScDetailContainer,
    ScDisabledButton,
    ScErrorContainer,
    ScFreeShipping,
    ScImageContainer,
    ScLabel,
    ScLine,
    ScLoadingBrand,
    ScLoadingName,
    ScLoadingPrice,
    ScLoadingSize,
    ScName,
    ScOrangeDot,
    ScPolicyContainer,
    ScPrice,
    ScPriceText,
    ScProductDetailContainer,
    ScQuantityButton,
    ScQuantityContainer,
    ScQuantityInput,
    ScQuantityInputContainer,
    ScRoot,
    ScSaleBadge,
    ScSizeButton,
    ScSizeOptionsContainer,
    ScStickyImage,
    ScStickyLoadingImage,
    ScStock,
    ScTextLink,
} from "./styles";

const ProductBody = () => {
    const { notifySuccess, notifyError, notifyAddToCartSuccess } = useToast();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState({});

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const { data, isError, isFetching, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            return await response.json();
        },
    });

    if (isError) {
        return (
            <ScErrorContainer>
                <ErrorRetry label="products" onRetry={refetch} size="l" showHomeButton />
            </ScErrorContainer>
        );
    }

    const product = data || {};

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existedProduct = cart.find(
            (productInCart) =>
                productInCart.id === product.id && productInCart.size === selectedSize.size
        );

        if (existedProduct) {
            // TODO: Error when add exceed max stock
            if (existedProduct.quantity + quantity > selectedSize.stock) {
                notifyError("Oops! Not enough stock for your order.");
            } else {
                let newCart = cart.filter(
                    (productInCart) =>
                        !(
                            productInCart.id === product.id &&
                            productInCart.size === selectedSize.size
                        )
                );

                const enhancedExistedProduct = {
                    ...existedProduct,
                    quantity: existedProduct.quantity + quantity,
                };

                newCart.push(enhancedExistedProduct);
                localStorage.setItem("cart", JSON.stringify(newCart));

                notifyAddToCartSuccess(enhancedExistedProduct, newCart.length);
                window.dispatchEvent(new Event("cartUpdated"));
            }
        } else {
            const addedProduct = {
                ...product,
                size: selectedSize.size,
                quantity: quantity,
            };

            cart.push(addedProduct);
            localStorage.setItem("cart", JSON.stringify(cart));

            notifySuccess("Added to cart");
            window.dispatchEvent(new Event("cartUpdated"));
        }
    };

    const getMaxQuantity = () => {
        if (!selectedSize.stock) {
            return 1;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existedProductInCart = cart.find(
            (productInCart) =>
                productInCart.id === product.id && productInCart.size === selectedSize.size
        );

        const selectedInCart = get(existedProductInCart, "quantity", 0);
        const stock = selectedSize.stock;

        return stock - selectedInCart;
    };

    return (
        <ScRoot>
            <ScBodyContainer>
                <ScImageContainer>
                    {isFetching ? (
                        <ScStickyLoadingImage />
                    ) : (
                        <ScStickyImage
                            $imgUrl={`http://localhost:3001/images/${product.imgName}`}
                        />
                    )}
                </ScImageContainer>
                <ScProductDetailContainer>
                    {isFetching ? <ScLoadingBrand /> : <ScBrand>{product.brand}</ScBrand>}
                    {isFetching ? <ScLoadingName /> : <ScName>{product.name}</ScName>}
                    <ScLine />
                    <ScDetailContainer>
                        <ScLabel>PRICE:</ScLabel>
                        <ScPriceText>
                            {isFetching ? (
                                <ScLoadingPrice />
                            ) : (
                                <>
                                    <ScPrice $fontColor={product.promotionPrice ? "red" : "black"}>
                                        ${" "}
                                        {product.promotionPrice
                                            ? FormatToLocaleString(Number(product.promotionPrice))
                                            : FormatToLocaleString(Number(product.price))}
                                    </ScPrice>
                                    {product.promotionPrice && (
                                        <ScBeforePromotionPrice>
                                            $ {FormatToLocaleString(Number(product.price))}
                                        </ScBeforePromotionPrice>
                                    )}
                                </>
                            )}
                        </ScPriceText>
                        {product.promotionPrice && <ScSaleBadge>SALE</ScSaleBadge>}
                    </ScDetailContainer>

                    <ScLabel>SIZE:</ScLabel>
                    {isFetching ? (
                        <ScLoadingSize />
                    ) : (
                        <ScSizeOptionsContainer>
                            {product.stock.map((stock) => (
                                <ScSizeButton
                                    $isSelected={selectedSize.size === stock.size}
                                    onClick={() => setSelectedSize(stock)}
                                >
                                    {stock.size}
                                    {/* {stock.stock} */}
                                </ScSizeButton>
                            ))}
                        </ScSizeOptionsContainer>
                    )}

                    <ScDetailContainer>
                        <ScLabel>QUANTITY:</ScLabel>
                        <ScQuantityContainer>
                            <ScQuantityButton
                                onClick={() => {
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                            >
                                -
                            </ScQuantityButton>
                            <ScQuantityInputContainer>
                                <ScQuantityInput
                                    type="number"
                                    min={1}
                                    max={getMaxQuantity()}
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </ScQuantityInputContainer>
                            <ScQuantityButton
                                onClick={() => {
                                    const max = getMaxQuantity();
                                    if (quantity < max) {
                                        setQuantity(quantity + 1);
                                    }
                                }}
                            >
                                +
                            </ScQuantityButton>
                        </ScQuantityContainer>
                        {selectedSize.stock && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                            >
                                <ScStock>Stock: {selectedSize.stock}</ScStock>
                            </motion.div>
                        )}
                    </ScDetailContainer>
                    {isFetching || !selectedSize.size ? (
                        <ScDisabledButton>Add to Cart</ScDisabledButton>
                    ) : (
                        <ScAddToCartButton onClick={addToCart}>Add to Cart</ScAddToCartButton>
                    )}
                    <ScLine />
                    <ScLabel>Free Delivery</ScLabel>
                    <ScFreeShipping>
                        Free standard delivery worldwide for every orders
                    </ScFreeShipping>
                    <ScLabel>Returns Policies</ScLabel>
                    <div>
                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                Used CyberWear gift cards can be cancelled within 14 days of
                                purchase — please{" "}
                                <ScTextLink to="/contact-us">contact us</ScTextLink> with your gift
                                card number.
                            </div>
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>Gift bags cannot be returned.</div>
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                Items purchased at CyberWear Clearance Stores cannot be returned or
                                exchanged unless they are defective or faulty.
                            </div>
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                Voodoo Boys products purchased online cannot be returned to any
                                Voodoo Boys Stadium Megastore.
                            </div>
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                CyberWear online store orders can only be returned to eligible
                                CyberWear stores in the same country where you made the original
                                purchase.
                            </div>
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                CyberWear stores that accept online returns cannot directly refund
                                all payment types and may instead offer a gift card at the manager's
                            </div>
                            discretion.
                        </ScPolicyContainer>

                        <ScPolicyContainer>
                            <ScOrangeDot />
                            <div>
                                CyberWear orders cannot be returned to CyberWear Partnered Stores or
                                CyberWear Clearance Stores.
                            </div>
                        </ScPolicyContainer>
                    </div>
                </ScProductDetailContainer>
            </ScBodyContainer>
        </ScRoot>
    );
};

export default ProductBody;
