import React from "react";

import { Link } from "react-router-dom";

import Logo from "components/Logo";

import {
    ScBottomSectionContainer,
    ScCopyRightText,
    ScPagePortal,
    ScPagesPortalContainer,
    ScPagesPortalHeader,
    ScRoot,
    ScSectionLine,
    ScShopDescription,
    ScSocialMediaLogosContainer,
    ScTextLink,
    ScTopSectionContainer,
} from "./styles";

const Footer = () => {
    return (
        <ScRoot>
            <ScTopSectionContainer>
                <div>
                    <Logo size="l" negativeColor />
                    <ScShopDescription>
                        Cyberpunk Tech Wear Shop or CyberWear shop brings you the most unique
                        clothing in this era.
                        <br />
                        We are the one and only tech wear shop in the world.
                        <br />
                        Wear the future, wear cyberwear clothing.
                    </ScShopDescription>
                </div>

                <ScPagesPortalContainer>
                    <div>
                        <ScPagesPortalHeader>Menu</ScPagesPortalHeader>
                        <ScTextLink to="/">
                            <ScPagePortal>Home</ScPagePortal>
                        </ScTextLink>
                        <ScTextLink to="/all-products">
                            <ScPagePortal>All Products</ScPagePortal>
                        </ScTextLink>
                        <ScTextLink to="/new-arrival">
                            <ScPagePortal>New Arrival</ScPagePortal>
                        </ScTextLink>
                        <ScTextLink to="/promotion">
                            <ScPagePortal>Promotion</ScPagePortal>
                        </ScTextLink>
                        <ScTextLink to="/cart">
                            <ScPagePortal>Cart</ScPagePortal>
                        </ScTextLink>
                    </div>
                    <div>
                        <ScPagesPortalHeader>Other</ScPagesPortalHeader>
                        <ScTextLink to="/about-us">
                            <ScPagePortal>About Us</ScPagePortal>
                        </ScTextLink>
                        {/* Todo: Contact Us Page */}
                        {/* <ScTextLink to="/contact-us">
                            <ScPagePortal>Contact Us</ScPagePortal>
                        </ScTextLink> */}
                    </div>
                </ScPagesPortalContainer>
            </ScTopSectionContainer>

            <ScSectionLine />

            <ScBottomSectionContainer>
                <ScCopyRightText>
                    <b>&copy; 2025</b> - Personal web development project by{" "}
                    <b>
                        <ScTextLink
                            to="https://www.linkedin.com/in/pittawas-choo/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PITTAWAS CHOOCHUEA (BOOM)
                        </ScTextLink>
                    </b>
                </ScCopyRightText>

                <ScSocialMediaLogosContainer>
                    <Link
                        to="https://www.linkedin.com/in/pittawas-choo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/shared/linkedin.png"
                            alt="LinkedIn"
                            width={16}
                            height={16}
                        />
                    </Link>
                    <Link
                        to="https://github.com/PittawasChoo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/shared/github.png" alt="GitHub" width={16} height={16} />
                    </Link>
                    <Link
                        to="https://www.facebook.com/pittawas.boom/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/shared/facebook.png"
                            alt="Facebook"
                            width={16}
                            height={16}
                        />
                    </Link>
                    <Link
                        to="https://www.instagram.com/13_0_0_111/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/shared/instagram.png"
                            alt="Instagram"
                            width={16}
                            height={16}
                        />
                    </Link>
                </ScSocialMediaLogosContainer>
            </ScBottomSectionContainer>
        </ScRoot>
    );
};

export default Footer;
