import React from "react";
import PropTypes from "prop-types";
import FastMarquee from "react-fast-marquee";

import WelcomeText from "./WelcomeText";

import { ScMarqueeContainer } from "./styles";

const Marquee = ({ reverse = false }) => {
    return (
        <ScMarqueeContainer>
            <FastMarquee autoFill direction={reverse ? "left" : "right"} speed={80}>
                <WelcomeText />
            </FastMarquee>
        </ScMarqueeContainer>
    );
};

Marquee.propTypes = {
    direction: PropTypes.bool,
};

export default Marquee;
