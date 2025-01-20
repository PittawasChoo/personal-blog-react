import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

import {
    ScGridContainer,
    ScLogoContainer,
    ScLogoText,
    ScLogoTextInvert,
    ScMenuContainer,
    ScMenuLabel,
    ScMenuNumber,
    ScOtherMenuContainer,
    ScProductsMenuContainer,
    ScRoot,
} from "./styles";

const Main = () => {
    const { scrollY } = useScroll();
    const [showBackground, setShowBackground] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 0) {
            setShowBackground(true);
        } else {
            setShowBackground(false);
        }
    });

    return (
        <ScRoot>
            <ScGridContainer
                variants={{
                    showBackground: {
                        backgroundColor: "#000000",
                        boxShadow: "-5px 2px 18px 2px rgba(0,0,0,0.4)",
                    },
                    hideBackground: { backgroundColor: "#00000000" },
                }}
                animate={showBackground ? "showBackground" : "hideBackground"}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                <ScLogoContainer>
                    <ScLogoText>CYBER</ScLogoText>
                    <ScLogoTextInvert>WEAR</ScLogoTextInvert>
                </ScLogoContainer>
                <ScProductsMenuContainer>
                    <ScMenuContainer>
                        <ScMenuLabel>
                            ALL PRODUCTS<ScMenuNumber>01</ScMenuNumber>
                        </ScMenuLabel>
                        <ScMenuLabel>
                            NEW ARRIVAL<ScMenuNumber>02</ScMenuNumber>
                        </ScMenuLabel>
                        <ScMenuLabel>
                            PROMOTION<ScMenuNumber>03</ScMenuNumber>
                        </ScMenuLabel>
                    </ScMenuContainer>
                </ScProductsMenuContainer>
                <ScOtherMenuContainer>
                    <ScMenuContainer>
                        <ScMenuLabel>
                            ABOUT US<ScMenuNumber>04</ScMenuNumber>
                        </ScMenuLabel>
                    </ScMenuContainer>
                    <ScMenuContainer>
                        <ScMenuLabel>CART</ScMenuLabel>
                        <ScMenuLabel>LOGIN</ScMenuLabel>
                        <ScMenuLabel>REGISTER</ScMenuLabel>
                    </ScMenuContainer>
                </ScOtherMenuContainer>
            </ScGridContainer>
        </ScRoot>
    );
};

export default Main;
