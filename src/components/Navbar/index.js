import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Logo from "components/Logo";

import { AuthContext } from "contexts/AuthContext";

import {
    ScCartItems,
    ScGridContainer,
    ScLogoContainer,
    ScMenuContainer,
    ScMenuLabel,
    ScMenuNumber,
    ScOtherMenuContainer,
    ScProductsMenuContainer,
    ScProfileOptionContainer,
    ScRoot,
    ScTextLink,
} from "./styles";

const Navbar = ({ alwaysShowBackground = false }) => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [showBackground, setShowBackground] = useState(false);

    // profile options controller
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

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
                return acc + Number(cur.quantity);
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
                            {/* Todo: Contact Us Page */}
                            {/* <ScMenuLabel>
                                CONTACT US<ScMenuNumber>05</ScMenuNumber>
                            </ScMenuLabel> */}
                        </ScTextLink>
                    </ScMenuContainer>
                    <ScMenuContainer>
                        <ScTextLink to="/cart">
                            <ScMenuLabel>
                                <img
                                    src="/images/shared/cart.png"
                                    alt="cart"
                                    width={24}
                                    height={24}
                                    loading="lazy"
                                />
                                <ScCartItems $showCount={cartCount > 0}>{cartCount}</ScCartItems>
                            </ScMenuLabel>
                        </ScTextLink>
                        {user ? (
                            <AccountCircleIcon
                                sx={{ fontSize: "32px", cursor: "pointer" }}
                                onClick={handleClick}
                            />
                        ) : (
                            <>
                                <ScTextLink to="/login">
                                    <ScMenuLabel>LOG IN</ScMenuLabel>
                                </ScTextLink>
                                <ScTextLink to="/register">
                                    <ScMenuLabel>REGISTER</ScMenuLabel>
                                </ScTextLink>
                            </>
                        )}
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                            {/* Todo: Profile Page */}
                            {/* <MenuItem onClick={() => navigate("/profile")}>
                                <ScProfileOptionContainer>
                                    <EditIcon sx={{ fontSize: "16px", color: "#000000DE" }} />{" "}
                                    <span>Edit Profile</span>
                                </ScProfileOptionContainer>
                            </MenuItem> */}
                            <MenuItem
                                onClick={() => {
                                    navigate("/history");
                                    handleClose();
                                }}
                            >
                                <ScProfileOptionContainer>
                                    <HistoryIcon sx={{ fontSize: "16px", color: "#000000DE" }} />{" "}
                                    <span>History</span>
                                </ScProfileOptionContainer>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    logout();
                                    handleClose();
                                }}
                            >
                                <ScProfileOptionContainer>
                                    <LogoutIcon sx={{ fontSize: "16px", color: "#000000DE" }} />{" "}
                                    <span>Log Out</span>
                                </ScProfileOptionContainer>
                            </MenuItem>
                        </Menu>
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
