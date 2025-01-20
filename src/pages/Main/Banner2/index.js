import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
    ScBackground,
    ScBackground2,
    ScBigText,
    ScBigTextInBrown,
    ScDot,
    ScLineContainer,
    ScLongLine,
    ScRoot,
    ScSmallText,
    ScTextContainer,
    ScTextInnerContainer,
} from "./styles";

const Banner2 = () => {
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
                            WEAR <br />
                            THE <br />
                            <ScBigTextInBrown>FUTURE</ScBigTextInBrown>
                        </ScBigText>

                        {/* Line */}
                        <ScLineContainer>
                            <ScDot />
                            <ScDot />
                            <ScDot />
                            <ScLongLine />
                            <ScDot />
                            <ScDot />
                            <ScDot />
                        </ScLineContainer>

                        <ScSmallText>Unlock the Door to Cybernatic Fashion Excellence</ScSmallText>
                    </ScTextInnerContainer>
                </ScTextContainer>
            </motion.div>
        </ScRoot>
    );
};

export default Banner2;
