import React, { useRef } from "react";
import PropTypes from "prop-types";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SmallCard from "components/Card/SmallCard";

import {
    ScBottomContentContainer,
    ScButton,
    ScButtonContainer,
    ScButtonLabel,
    ScCarouselContainer,
    ScCarouselInnerContainer,
    ScCenterBox,
    ScCenterBoxContentContainer,
    ScDot,
    ScHeaderContainer,
    ScHeaderLabel,
    ScLeftBox,
    ScLine,
    ScLongLine,
    ScNextButton,
    ScPreviousButton,
    ScRightBox,
    ScRoot,
    ScTextLink,
} from "./styles";

const ProductCarousel = ({ header, products, linkTo }) => {
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
        <ScRoot>
            <ScLeftBox />

            <ScCenterBox>
                <ScCenterBoxContentContainer>
                    <ScHeaderContainer>
                        <ScHeaderLabel>{header}</ScHeaderLabel>
                        <ScButtonLabel>
                            <ScDot />
                            <ScDot />
                            <ScLine />
                            <ScDot />
                            <ScDot />
                            <ScButtonContainer>
                                <ScTextLink to={linkTo}>
                                    <ScButton>
                                        VIEW ALL
                                        <img
                                            src="/images/shared/link-arrow.png"
                                            alt="view all"
                                            width={16}
                                            height={16}
                                        />
                                    </ScButton>
                                </ScTextLink>
                            </ScButtonContainer>
                        </ScButtonLabel>
                    </ScHeaderContainer>
                    <ScBottomContentContainer>
                        <ScLongLine />
                        <ScPreviousButton onClick={previous}>
                            <img
                                src="/images/shared/orange-left-arrow.png"
                                alt="previous"
                                width={10}
                                height={10}
                            />
                        </ScPreviousButton>
                        <ScNextButton onClick={next}>
                            <img
                                src="/images/shared/orange-right-arrow.png"
                                alt="next"
                                width={10}
                                height={10}
                            />
                        </ScNextButton>
                    </ScBottomContentContainer>
                </ScCenterBoxContentContainer>
            </ScCenterBox>

            <ScRightBox />

            {/* carousel */}
            <ScCarouselContainer>
                <ScCarouselInnerContainer>
                    <div className="slider-container">
                        <Slider
                            {...settings}
                            ref={(slider) => {
                                sliderRef = slider;
                            }}
                        >
                            {products.map((product) => {
                                return (
                                    <SmallCard
                                        key={product.id}
                                        id={product.id}
                                        imgUrl={`http://localhost:3001/images/${product.imgName}`}
                                        brand={product.brand}
                                        name={product.name}
                                        price={Number(product.price)}
                                        promotionPrice={Number(product.promotionPrice)}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                </ScCarouselInnerContainer>
            </ScCarouselContainer>
        </ScRoot>
    );
};

ProductCarousel.propTypes = {
    header: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    linkTo: PropTypes.string.isRequired,
};

export default ProductCarousel;
