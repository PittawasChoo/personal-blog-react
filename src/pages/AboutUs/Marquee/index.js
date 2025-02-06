import React from "react";

import FastMarquee from "react-fast-marquee";

import WelcomeText from "./WelcomeText";
import { ScMarqueeContainer } from "./styles";

const Marquee = () => {
    return (
        <ScMarqueeContainer>
            <FastMarquee autoFill direction={"left"} speed={80}>
                <WelcomeText />
            </FastMarquee>
        </ScMarqueeContainer>
    );
};

export default Marquee;
