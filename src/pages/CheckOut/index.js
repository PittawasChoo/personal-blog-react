import React, { useEffect, useState } from "react";

import { orderBy } from "lodash";
import { useQuery } from "@tanstack/react-query";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import CheckoutForm from "./CheckoutForm";
import {
    ScBody,
    ScCheckoutFormContainer,
    ScContentContainer,
    ScHeader,
    ScLabel,
    ScLine,
    ScLoadingPrice,
    ScLoadingPriceContainer,
    ScPrice,
    ScPricingContainer,
    ScRoot,
    ScStickySummary,
    ScSummaryContainer,
    ScSummaryHeader,
    ScTotalPrice,
} from "./styles";
import OrderSummaryModal from "./OrderSummaryModal";

const Checkout = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [orderSummary, setOrderSummary] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getCart = () => {
            const cartInLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
            const orderedCart = orderBy(cartInLocalStorage, ["name", "timestamp"], "asc");
            setCart(orderedCart);
        };

        getCart();

        const handleStorageChange = (event) => {
            if (event.key === "cart") getCart();
        };

        window.addEventListener("storage", handleStorageChange);

        const handleCustomEvent = () => getCart();
        window.addEventListener("cartUpdated", handleCustomEvent);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("cartUpdated", handleCustomEvent);
        };
    }, []);

    const {
        data: userData,
        isError: isLoadingUserDataError,
        isFetching: isLoadingUserData,
        refetch: refetchUserData,
    } = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const token = localStorage.getItem("authToken");
            const response = await fetch("http://localhost:3001/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return await response.json();
        },
    });
    const user = userData || {};

    const ids = cart.map((cartItem) => cartItem.id);
    const {
        data: cartData,
        isError: isLoadingCartError,
        isFetching: isLoadingCart,
        refetch: refetchCart,
    } = useQuery({
        queryKey: ["cart", ids],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ids: ids }),
            });
            return await response.json();
        },
    });
    const productsData = cartData || [];
    const enhancedCart = cart.map((cartItem) => {
        const data = productsData.find((product) => product.id === cartItem.id);
        return {
            ...data,
            ...cartItem,
        };
    });

    const getSubtotalPrice = () => {
        return enhancedCart.reduce((acc, cur) => {
            const productPrice = cur.promotionPrice || cur.price;
            return acc + productPrice * cur.quantity;
        }, 0);
    };

    return (
        <ScRoot>
            <ScBody>
                <OrderSummaryModal
                    isModalOpen={isModalOpen}
                    orderSummary={orderSummary}
                    cart={enhancedCart}
                    onClose={() => setIsModalOpen(false)}
                    isLoading={isLoadingCart}
                    isError={isLoadingCartError}
                    refetch={refetchCart}
                />

                <ScHeader>CHECKOUT</ScHeader>

                <ScContentContainer>
                    <ScCheckoutFormContainer>
                        <CheckoutForm
                            setOrderSummary={setOrderSummary}
                            setIsModalOpen={setIsModalOpen}
                            userData={user}
                        />
                    </ScCheckoutFormContainer>

                    <ScSummaryContainer>
                        <ScStickySummary>
                            <ScSummaryHeader>SUMMARY</ScSummaryHeader>
                            <ScPricingContainer>
                                <ScLabel $showMargin>Subtotal:</ScLabel>
                                {isLoadingCart ? (
                                    <ScLoadingPriceContainer>
                                        <ScLoadingPrice />
                                    </ScLoadingPriceContainer>
                                ) : (
                                    <ScPrice>
                                        $ {FormatToLocaleString(Number(getSubtotalPrice()))}
                                    </ScPrice>
                                )}

                                <ScLabel>Delivery Fee:</ScLabel>
                                <ScPrice>Free</ScPrice>
                            </ScPricingContainer>
                            <ScLine />
                            <ScTotalPrice>
                                <div>Total</div>
                                {isLoadingCart ? (
                                    <ScLoadingPrice />
                                ) : (
                                    <div>$ {FormatToLocaleString(Number(getSubtotalPrice()))}</div>
                                )}
                            </ScTotalPrice>
                        </ScStickySummary>
                    </ScSummaryContainer>
                </ScContentContainer>
            </ScBody>
        </ScRoot>
    );
};

export default Checkout;
