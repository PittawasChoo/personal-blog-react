import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

const Carousel = ({ header }) => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        className: "slider variable-width",
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
                {/* Left Box */}
                <div
                    style={{
                        border: "1px solid #ff4f00",
                        borderTopRightRadius: "15px",
                        borderBottomRightRadius: "15px",
                        height: "630px",
                        width: "500px",
                    }}
                />

                {/* Mid Box */}
                <div
                    style={{
                        margin: "0 15px 0 15px",
                        width: "1350px",
                        height: "630px",
                        flex: 1,
                        border: "1px solid #ff4f00",
                        borderRadius: "15px",
                    }}
                >
                    <div
                        style={{
                            width: "1320px",
                            padding: "35px 50px 30px 50px",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                height: "76px",
                                display: "flex",
                                color: "black",
                                justifyContent: "space-between",
                                alignItems: "end",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "76px",
                                    fontWeight: "1000",
                                    fontFamily: "space-explorer",
                                    lineHeight: "76px",
                                    marginRight: "50px",
                                }}
                            >
                                {header}
                            </div>
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <div
                                    style={{
                                        width: "3px",
                                        height: "1px",
                                        backgroundColor: "#ff4f00",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "3px",
                                        height: "1px",
                                        backgroundColor: "#ff4f00",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "100px",
                                        height: "1px",
                                        backgroundColor: "#ff4f00",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "3px",
                                        height: "1px",
                                        backgroundColor: "#ff4f00",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "3px",
                                        height: "1px",
                                        backgroundColor: "#ff4f00",
                                    }}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                        fontFamily: "oxanium",
                                        fontSize: "14px",
                                        fontWeight: "800",
                                        lineHeight: "14px",
                                    }}
                                >
                                    <div
                                        style={{
                                            border: "1px solid #ff4f00",
                                            color: "#ff4f00",
                                            padding: "6px 30px",
                                            borderRadius: "700px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        VIEW ALL
                                        <img
                                            src="images/shared/link-arrow.png"
                                            alt="caution"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
                        >
                            <div
                                style={{
                                    height: "1px",
                                    backgroundColor: "#ff4f00",
                                    flex: 1,
                                    marginRight: "40px",
                                }}
                            />
                            <div
                                style={{
                                    border: "1px solid #ff4f00",
                                    width: "36px",
                                    height: "36px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "black",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                    marginRight: "20px",
                                }}
                                onClick={previous}
                            >
                                <img
                                    src="images/shared/orange-left-arrow.png"
                                    alt="caution"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <div
                                style={{
                                    border: "1px solid #ff4f00",
                                    width: "36px",
                                    height: "36px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "black",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                }}
                                onClick={next}
                            >
                                <img
                                    src="images/shared/orange-right-arrow.png"
                                    alt="caution"
                                    width={10}
                                    height={10}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Box */}
                <div
                    style={{
                        border: "1px solid #ff4f00",
                        borderTopLeftRadius: "15px",
                        borderBottomLeftRadius: "15px",
                        height: "630px",
                        width: "500px",
                    }}
                />

                {/* carousel */}
                <div style={{ position: "absolute", width: "100%", top: "140px" }}>
                    <div style={{ position: "relative" }}>
                        <div className="slider-container">
                            <Slider
                                {...settings}
                                ref={(slider) => {
                                    sliderRef = slider;
                                }}
                            >
                                <Card
                                    imgUrl={"/images/samples/sample1.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample1.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample2.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample2.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample3.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample3.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample4.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample4.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample3.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                                <Card
                                    imgUrl={"/images/samples/sample3.png"}
                                    brand={"Nova Forge"}
                                    name={"Worker boots New Era - NF0092"}
                                    price={99123.45}
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Carousel.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Carousel;
