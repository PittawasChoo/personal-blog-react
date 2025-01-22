import React from "react";
import PropTypes from "prop-types";

import { ScLogoText, ScLogoTextInvert, ScRoot } from "./styles";

const Logo = ({ negativeColor = false, size = "s" }) => {
    const getFontSize = () => {
        switch (size) {
            case "s":
                return 16;
            case "m":
                return 24;
            case "l":
                return 32;
            case "xl":
                return 40;
            default:
                return 16;
        }
    };

    const fontSize = getFontSize();

    return (
        <ScRoot $fontSize={fontSize} $negativeColor={negativeColor}>
            <ScLogoText>CYBER</ScLogoText>
            <ScLogoTextInvert $fontSize={fontSize}>WEAR</ScLogoTextInvert>
        </ScRoot>
    );
};

Logo.propTypes = {
    negativeColor: PropTypes.bool,
    size: PropTypes.string,
};

export default Logo;
