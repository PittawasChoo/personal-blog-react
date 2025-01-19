import React from "react";

import Card from "./Card";

const Trending = () => {
    return (
        <div
            style={{
                backgroundImage: "url(/images/samples/Circle.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                paddingBottom: "60px",
                position: "relative",
            }}
        >
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "30px",
                    right: "10px",
                    height: "2px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#ff4f00",
                        height: "1px",
                        width: "500px",
                        marginRight: "10px",
                    }}
                />
                <div
                    style={{
                        width: "4px",
                        height: "1px",
                        backgroundColor: "#ff4f00",
                        marginRight: "10px",
                    }}
                />
                <div style={{ width: "4px", height: "1px", backgroundColor: "#ff4f00" }} />
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                }}
            >
                <div
                    style={{
                        fontFamily: "space-explorer",
                        fontSize: "80px",
                        fontWeight: "800",
                        color: "black",
                        lineHeight: "80px",
                    }}
                >
                    TRENDING
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "40px",
                    }}
                >
                    <div style={{ width: "3px", height: "3px", backgroundColor: "#ff4f00" }} />
                    <div style={{ width: "3px", height: "3px", backgroundColor: "#ff4f00" }} />
                    <div style={{ width: "3px", height: "3px", backgroundColor: "#ff4f00" }} />
                    <div style={{ width: "3px", height: "3px", backgroundColor: "#ff4f00" }} />
                </div>
                {/* <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        fontFamily: "oxanium",
                        fontSize: "20px",
                        fontWeight: "800",
                        lineHeight: "20px",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#ff4f00",
                            padding: "10px 30px",
                            borderRadius: "700px",
                        }}
                    >
                        VIEW ALL
                    </div>
                    <div
                        style={{
                            backgroundColor: "grey",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "black",
                            borderRadius: "50%",
                        }}
                    >
                        <img
                            src="images/shared/left-arrow.png"
                            alt="caution"
                            width={10}
                            height={10}
                        />
                    </div>
                    <div
                        style={{
                            backgroundColor: "grey",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "black",
                            borderRadius: "50%",
                        }}
                    >
                        <img
                            src="images/shared/right-arrow.png"
                            alt="caution"
                            width={10}
                            height={10}
                        />
                    </div>
                </div> */}
            </div>

            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Card
                    imgUrl={"/images/samples/sample1.png"}
                    brand={"Nova Forge"}
                    name={"Worker boots New Era - NF0092"}
                    price={99123.45}
                />
                <Card
                    imgUrl={"/images/samples/sample2.png"}
                    brand={"SynLux"}
                    name={"SynLux - Luxury Tactical Satchel"}
                    price={99123.45}
                />
                <Card
                    imgUrl={"/images/samples/sample3.png"}
                    brand={"Luminara"}
                    name={"Double layer warmtech jacket - LN2613"}
                    price={99123.45}
                />
                <Card
                    imgUrl={"/images/samples/sample4.png"}
                    brand={"Arasaka"}
                    name={"Hard leather jacket - Military grade"}
                    price={99123.45}
                />
            </div>
        </div>
    );
};

export default Trending;
