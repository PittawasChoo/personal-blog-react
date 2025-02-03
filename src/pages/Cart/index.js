import React, { useContext, useEffect, useState } from "react";

import { orderBy } from "lodash";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "contexts/AuthContext";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import CartItem from "./CartItem";
import {
    ScBody,
    ScButton,
    ScContentContainer,
    ScHeader,
    ScLabel,
    ScLine,
    ScNoItemsButton,
    ScNoItemsContainer,
    ScNoItemsLabel,
    ScPrice,
    ScPricingContainer,
    ScRoot,
    ScStickySummary,
    ScSummaryContainer,
    ScSummaryHeader,
    ScTotalPrice,
} from "./styles";

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

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

    const handleCheckout = () => {
        navigate(user ? "/checkout" : "/login", { state: { redirectTo: "/checkout" } });
    };

    const ids = cart.map((cartItem) => cartItem.id);
    const { data, isError, isLoading, refetch } = useQuery({
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

    const productsData = data || [];

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
                <ScHeader>CART</ScHeader>
                {enhancedCart.length > 0 ? (
                    <ScContentContainer>
                        <div>
                            {enhancedCart.map((product) => (
                                <CartItem key={product.id + product.size} product={product} />
                            ))}
                        </div>

                        <ScSummaryContainer>
                            <ScStickySummary>
                                <ScSummaryHeader>SUMMARY</ScSummaryHeader>
                                <ScPricingContainer>
                                    <ScLabel $showMargin>Subtotal:</ScLabel>
                                    <ScPrice>
                                        $ {FormatToLocaleString(Number(getSubtotalPrice()))}
                                    </ScPrice>
                                    <ScLabel>Delivery Fee:</ScLabel>
                                    <ScPrice>Free</ScPrice>
                                </ScPricingContainer>
                                <ScLine />
                                <ScTotalPrice>
                                    <div>Total</div>
                                    <div>$ {FormatToLocaleString(Number(getSubtotalPrice()))}</div>
                                </ScTotalPrice>
                                <ScLine />
                                <ScButton onClick={handleCheckout}>Checkout</ScButton>
                            </ScStickySummary>
                        </ScSummaryContainer>
                    </ScContentContainer>
                ) : (
                    <div>
                        <ScNoItemsContainer>
                            <ScNoItemsLabel>There Are No Items In This Cart. :(</ScNoItemsLabel>

                            <ScNoItemsButton onClick={() => navigate("/all-products")}>
                                View All Products
                            </ScNoItemsButton>
                        </ScNoItemsContainer>
                    </div>
                )}
            </ScBody>
        </ScRoot>
    );
};

export default Cart;
