import React, { useEffect, useState } from "react";

import { get, orderBy } from "lodash";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import ErrorRetry from "components/ErrorRetry";

import useToast from "hooks/useToast";

import { formatToLocaleString } from "modules/number/formatToLocaleString";

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

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const SIZE_ORDER = ["xs", "s", "m", "l", "xl", "xxl"];
const SHOES_SIZE_ORDER = ["6 us", "7 us", "8 us", "9 us", "10 us", "11 us", "12 us"];

const ProductBody = () => {
    const { notifyError, notifyAddToCartSuccess } = useToast();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState({});

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const {
        data,
        isError,
        isFetching: isLoading,
        refetch,
    } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await fetch(`${BACKEND_URL}/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            return await response.json();
        },
    });

    const product = get(data, "[0]", {});

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existedProduct = cart.find(
            (productInCart) =>
                productInCart.id === product.id && productInCart.size === selectedSize.size
        );

        if (existedProduct) {
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
                    timestamp: Date.now(),
                };

                newCart.push(enhancedExistedProduct);
                localStorage.setItem("cart", JSON.stringify(newCart));

                const itemsCount = newCart.reduce((acc, cur) => {
                    return acc + cur.quantity;
                }, 0);

                notifyAddToCartSuccess(product, itemsCount);
                window.dispatchEvent(new Event("cartUpdated"));
            }
        } else {
            const newCartItem = {
                id: product.id,
                size: selectedSize.size,
                quantity: quantity,
                timestamp: Date.now(),
            };

            cart.push(newCartItem);
            localStorage.setItem("cart", JSON.stringify(cart));

            const itemsCount = cart.reduce((acc, cur) => {
                return acc + cur.quantity;
            }, 0);

            notifyAddToCartSuccess(product, itemsCount);
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

    // If there is only 1 size option, pre-select that option.
    useEffect(() => {
        const sizesInStock = get(product, "stock", []);

        if (sizesInStock.length === 1) {
            setSelectedSize(sizesInStock[0]);
        }
    }, [product]);

    if (isError) {
        return (
            <ScErrorContainer>
                <ErrorRetry label="products" onRetry={refetch} size="l" showHomeButton />
            </ScErrorContainer>
        );
    }

    const sortByProductSizes = (stock) => {
        const sizes = stock.map((item) => item.size);

        if (sizes.some((size) => SIZE_ORDER.includes(size.toLowerCase()))) {
            return stock.sort((acc, cur) => {
                const previousIndex = SIZE_ORDER.indexOf(acc.size.toLowerCase());
                const currentIndex = SIZE_ORDER.indexOf(cur.size.toLowerCase());
                return previousIndex - currentIndex;
            });
        }

        if (sizes.some((size) => SHOES_SIZE_ORDER.includes(size.toLowerCase()))) {
            return stock.sort((acc, cur) => {
                const previousIndex = SHOES_SIZE_ORDER.indexOf(acc.size.toLowerCase());
                const currentIndex = SHOES_SIZE_ORDER.indexOf(cur.size.toLowerCase());
                return previousIndex - currentIndex;
            });
        }

        return orderBy(stock, "size", "asc");
    };

    return (
        <ScRoot>
            <ScBodyContainer>
                <ScImageContainer>
                    {isLoading ? (
                        <ScStickyLoadingImage />
                    ) : (
                        <ScStickyImage $imgUrl={`${BACKEND_URL}/images/${product.imgName}`} />
                    )}
                </ScImageContainer>
                <ScProductDetailContainer>
                    {isLoading ? <ScLoadingBrand /> : <ScBrand>{product.brand}</ScBrand>}
                    {isLoading ? <ScLoadingName /> : <ScName>{product.name}</ScName>}
                    <ScLine />
                    <ScDetailContainer>
                        <ScLabel>PRICE:</ScLabel>
                        <ScPriceText>
                            {isLoading ? (
                                <ScLoadingPrice />
                            ) : (
                                <>
                                    <ScPrice $fontColor={product.promotionPrice ? "red" : "black"}>
                                        ${" "}
                                        {product.promotionPrice
                                            ? formatToLocaleString(Number(product.promotionPrice))
                                            : formatToLocaleString(Number(product.price))}
                                    </ScPrice>
                                    {product.promotionPrice && (
                                        <ScBeforePromotionPrice>
                                            $ {formatToLocaleString(Number(product.price))}
                                        </ScBeforePromotionPrice>
                                    )}
                                </>
                            )}
                        </ScPriceText>
                        {product.promotionPrice && <ScSaleBadge>SALE</ScSaleBadge>}
                    </ScDetailContainer>

                    <ScLabel>SIZE:</ScLabel>
                    {isLoading ? (
                        <ScLoadingSize />
                    ) : (
                        <ScSizeOptionsContainer>
                            {sortByProductSizes(get(product, "stock", [])).map((stock) => (
                                <ScSizeButton
                                    key={stock.id}
                                    $isSelected={selectedSize.size === stock.size}
                                    onClick={() => setSelectedSize(stock)}
                                >
                                    {stock.size}
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
                                <img
                                    src="/images/shared/minus.png"
                                    alt="minus"
                                    width={16}
                                    height={16}
                                />
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
                                <img
                                    src="/images/shared/plus.png"
                                    alt="plus"
                                    width={16}
                                    height={16}
                                />
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
                    {isLoading || !selectedSize.size ? (
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
