import React from "react";
import PropTypes from "prop-types";

const Card = ({ imgUrl, brand, name, price, minimal = false }) => {
    return (
        <div
            style={{
                position: "relative",
                fontFamily: "oxanium",
                width: "280px",
                marginRight: "60px",
                marginBottom: "5px",
            }}
        >
            <div
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                    height: "380px",
                    backgroundColor: "#a8a8a8",
                    position: "relative",
                    zIndex: 2,
                    cursor: "pointer",
                }}
            >
                <div
                    style={{
                        width: "278px",
                        height: "378px",
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
                            height: "280px",
                            backgroundImage: `url(${imgUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "bottom",
                        }}
                    />
                    <div
                        style={{
                            height: "120px",
                            padding: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "14px",
                                    lineHeight: "14px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {name}
                            </div>
                            <div
                                style={{
                                    marginTop: "8px",
                                    color: "grey",
                                    fontSize: "8px",
                                    lineHeight: "8px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {brand}
                            </div>
                        </div>
                        <div
                            style={{
                                marginLeft: "20px",
                                fontSize: "17px",
                                lineHeight: "17px",
                                fontWeight: "800",
                            }}
                        >
                            ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)",
                    height: "380px",
                    width: "280px",
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
    minimal: PropTypes.bool,
};

export default Card;
