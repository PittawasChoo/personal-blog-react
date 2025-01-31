import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useMotionValueEvent, useScroll } from "framer-motion";

import Logo from "components/Logo";

import {
    ScCartItems,
    ScGridContainer,
    ScLogoContainer,
    ScMenuContainer,
    ScMenuLabel,
    ScMenuNumber,
    ScOtherMenuContainer,
    ScProductsMenuContainer,
    ScRoot,
    ScTextLink,
} from "./styles";

const Navbar = ({ alwaysShowBackground = false }) => {
    const [showBackground, setShowBackground] = useState(false);

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    });

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const getCartCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const itemsCount = cart.reduce((acc, cur) => {
                return acc + cur.quantity;
            }, 0);
            setCartCount(itemsCount);
        };

        getCartCount();

        const handleStorageChange = (event) => {
            if (event.key === "cart") getCartCount();
        };

        window.addEventListener("storage", handleStorageChange);

        const handleCustomEvent = () => getCartCount();
        window.addEventListener("cartUpdated", handleCustomEvent);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("cartUpdated", handleCustomEvent);
        };
    }, []);

    return (
        <ScRoot>
            <ScGridContainer
                variants={{
                    showBackground: {
                        backgroundColor: "#000000",
                        boxShadow: "-5px 2px 18px -6px rgba(0,0,0,0.4)",
                    },
                    hideBackground: { backgroundColor: "#00000000" },
                }}
                animate={
                    showBackground || alwaysShowBackground ? "showBackground" : "hideBackground"
                }
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <ScTextLink to="/">
                    <ScLogoContainer>
                        <Logo />
                    </ScLogoContainer>
                </ScTextLink>
                <ScProductsMenuContainer>
                    <ScMenuContainer>
                        <ScTextLink to="/all-products">
                            <ScMenuLabel>
                                ALL PRODUCTS<ScMenuNumber>01</ScMenuNumber>
                            </ScMenuLabel>
                        </ScTextLink>
                        <ScTextLink to="/new-arrival">
                            <ScMenuLabel>
                                NEW ARRIVAL<ScMenuNumber>02</ScMenuNumber>
                            </ScMenuLabel>
                        </ScTextLink>
                        <ScTextLink to="/promotion">
                            <ScMenuLabel>
                                PROMOTION<ScMenuNumber>03</ScMenuNumber>
                            </ScMenuLabel>
                        </ScTextLink>
                    </ScMenuContainer>
                </ScProductsMenuContainer>
                <ScOtherMenuContainer>
                    <ScMenuContainer>
                        <ScTextLink to="/about-us">
                            <ScMenuLabel>
                                ABOUT US<ScMenuNumber>04</ScMenuNumber>
                            </ScMenuLabel>
                        </ScTextLink>
                        <ScTextLink to="/contact-us">
                            <ScMenuLabel>
                                CONTACT US<ScMenuNumber>05</ScMenuNumber>
                            </ScMenuLabel>
                        </ScTextLink>
                    </ScMenuContainer>
                    <ScMenuContainer>
                        <ScTextLink to="/cart">
                            <ScMenuLabel>
                                CART
                                <ScCartItems $showCount={cartCount > 0}>{cartCount}</ScCartItems>
                            </ScMenuLabel>
                        </ScTextLink>
                        <ScMenuLabel>LOGIN</ScMenuLabel>
                        <ScMenuLabel>REGISTER</ScMenuLabel>
                    </ScMenuContainer>
                </ScOtherMenuContainer>
            </ScGridContainer>
        </ScRoot>
    );
};

Navbar.propTypes = {
    alwaysShowBackground: PropTypes.bool,
};

export default Navbar;
