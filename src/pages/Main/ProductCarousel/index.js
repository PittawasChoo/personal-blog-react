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
} from "./styles";

const ProductCarousel = ({ header }) => {
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
                                <ScButton>
                                    VIEW ALL
                                    <img
                                        src="images/shared/link-arrow.png"
                                        alt="caution"
                                        width={16}
                                        height={16}
                                    />
                                </ScButton>
                            </ScButtonContainer>
                        </ScButtonLabel>
                    </ScHeaderContainer>
                    <ScBottomContentContainer>
                        <ScLongLine />
                        <ScPreviousButton onClick={previous}>
                            <img
                                src="images/shared/orange-left-arrow.png"
                                alt="caution"
                                width={10}
                                height={10}
                            />
                        </ScPreviousButton>
                        <ScNextButton onClick={next}>
                            <img
                                src="images/shared/orange-right-arrow.png"
                                alt="caution"
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
                            <SmallCard
                                imgUrl={"/images/samples/sample1.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample1.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample2.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample2.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample3.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample3.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample4.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample4.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample3.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                            <SmallCard
                                imgUrl={"/images/samples/sample3.png"}
                                brand={"Nova Forge"}
                                name={"Worker boots New Era - NF0092"}
                                price={99123.45}
                            />
                        </Slider>
                    </div>
                </ScCarouselInnerContainer>
            </ScCarouselContainer>
        </ScRoot>
    );
};

ProductCarousel.propTypes = {
    header: PropTypes.string.isRequired,
};

export default ProductCarousel;
