import React from "react";
import PropTypes from "prop-types";

const Card = ({ imgUrl, brand, name, price }) => {
    return (
        <div style={{ position: "relative", fontFamily: "oxanium" }}>
            <div
                style={{
                    width: "310px",
                    clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                    height: "450px",
                    backgroundColor: "#a8a8a8",
                    position: "relative",
                    zIndex: 2,
                    cursor: "pointer",
                }}
            >
                <div
                    style={{
                        width: "308px",
                        height: "448px",
                        overflow: "hidden",
                        color: "black",
                        backgroundColor: "#FFFFFF",
                        clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                        position: "absolute",
                        left: "1px",
                        top: "1px",
                    }}
                >
                    <div
                        style={{
                            height: "300px",
                            backgroundImage: `url(${imgUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "bottom",
                        }}
                    />
                    <div
                        style={{
                            height: "150px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    color: "grey",
                                    fontSize: "11px",
                                    lineHeight: "11px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {brand}
                            </div>
                            <div
                                style={{
                                    marginTop: "10px",
                                    fontSize: "16px",
                                    lineHeight: "17px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {name}
                            </div>
                        </div>
                        <div style={{ fontSize: "19px", lineHeight: "19px", fontWeight: "800" }}>
                            ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                    height: "450px",
                    width: "310px",
                    backgroundColor: "black",
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    opacity: 0.07,
                }}
            />
        </div>
    );
};

Card.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Card;
