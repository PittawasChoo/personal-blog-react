import React, { useContext, useEffect, useState } from "react";

import { orderBy } from "lodash";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "contexts/AuthContext";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import CartItem from "./CartItem";
import {
    ScBody,
    ScButton,
    ScColon,
    ScContentContainer,
    ScHeader,
    ScLabel,
    ScLine,
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

    const getSubtotalPrice = () => {
        return cart.reduce((acc, cur) => {
            const productPrice = cur.promotionPrice || cur.price;
            return acc + productPrice * cur.quantity;
        }, 0);
    };

    const handleCheckout = () => {
        navigate(user ? "/check-out" : "/login", { state: { redirectTo: "/check-out" } });
    };

    return (
        <ScRoot>
            <ScBody>
                <ScHeader>
                    CART<ScColon>:</ScColon>
                </ScHeader>

                <ScContentContainer>
                    <div>
                        {cart.map((product) => (
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
                            <ScButton onClick={handleCheckout}>Check out</ScButton>
                        </ScStickySummary>
                    </ScSummaryContainer>
                </ScContentContainer>
            </ScBody>
        </ScRoot>
    );
};

export default Cart;
