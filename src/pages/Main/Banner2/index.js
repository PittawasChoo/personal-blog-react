import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { ScBackground, ScBackground2 } from "./styles";

const Banner2 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    console.log("backgroundY", backgroundY);

    return (
        <div
            ref={ref}
            style={{
                width: "100%",
                height: "80vh",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#f6f4f9",
            }}
        >
            <motion.div
                style={{
                    height: "100%",
                    y: backgroundY,
                    x: "10vw",
                }}
            >
                <ScBackground />
                <ScBackground2 />
            </motion.div>

            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    zIndex: 3,
                    padding: "0 15vw",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    y: backgroundY,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        margin: 0,
                        color: "black",
                        textAlign: "end",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "space-explorer",
                            margin: 0,
                            fontSize: "6vw",
                            lineHeight: "7vw",
                            fontWeight: 800,
                        }}
                    >
                        WEAR <br />
                        THE <br />
                        <span style={{ color: "#ff4f00" }}>FUTURE</span>
                    </p>

                    {/* Line */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "20px",
                            marginBottom: "30px",
                            gap: ".6vw",
                        }}
                    >
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                height: "2px",
                                width: "23vw",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                        <div
                            style={{
                                width: "0.3vw",
                                height: "2px",
                                backgroundColor: "#ff4f00",
                            }}
                        />
                    </div>

                    <p
                        style={{
                            margin: 0,
                            fontFamily: "oxanium",
                            fontSize: "1.25vw",
                            fontWeight: 800,
                            color: "#666666",
                        }}
                    >
                        Unlock the Door to Cybernatic Fashion Excellence
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner2;
