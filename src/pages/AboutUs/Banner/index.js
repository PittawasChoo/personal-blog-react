import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import {
    ScBackground,
    ScBackground2,
    ScBigText,
    ScBigTextInBrown,
    ScRoot,
    ScSmallText,
    ScTextContainer,
    ScTextInnerContainer,
} from "./styles";

const Banner = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <ScRoot ref={ref}>
            <motion.div
                style={{
                    height: "100%",
                    x: "10vw",
                    y: backgroundY,
                }}
            >
                <ScBackground />
                <ScBackground2 />
            </motion.div>

            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    zIndex: "3",
                    height: "100%",
                    width: "100%",
                    y: backgroundY,
                }}
            >
                <ScTextContainer>
                    <ScTextInnerContainer>
                        <ScBigText>
                            <ScBigTextInBrown>WHO</ScBigTextInBrown> ARE WE...
                        </ScBigText>

                        {/* Line */}
                        {/* <ScLineContainer>
                            <ScDot />
                            <ScDot />
                            <ScDot />
                            <ScLongLine />
                            <ScDot />
                            <ScDot />
                            <ScDot />
                        </ScLineContainer> */}

                        <ScSmallText>
                            CyberWear is a personal e-commerce project <br /> created to showcase my
                            coding skills only.
                            <div style={{ marginBottom: "40px" }} />
                            Its design is inspired by various sources. <br /> I will NOT claim any
                            design credit in this website.
                            <div style={{ marginBottom: "40px" }} />
                            The focus of this website is on demonstrating my technical ability.
                        </ScSmallText>
                    </ScTextInnerContainer>
                </ScTextContainer>
            </motion.div>
        </ScRoot>
    );
};

export default Banner;
