import React from "react";
import PropTypes from "prop-types";

import BigCard from "components/Card/BigCard";

import {
    ScBottomArtContainer,
    ScCardsContainer,
    ScDot,
    ScDotsContainer,
    ScHeaderContainer,
    ScHeaderLabel,
    ScLine,
    ScRoot,
    ScSmallDot,
} from "./styles";

const Trending = ({ items }) => {
    return (
        <ScRoot>
            <ScHeaderContainer>
                <ScHeaderLabel>TRENDING</ScHeaderLabel>
                <ScDotsContainer>
                    <ScDot />
                    <ScDot />
                    <ScDot />
                    <ScDot />
                </ScDotsContainer>
            </ScHeaderContainer>

            <ScCardsContainer>
                {items.map((item) => {
                    return (
                        <BigCard
                            imgUrl={item.imgUrl}
                            brand={item.brand}
                            name={item.name}
                            price={item.price}
                            promotionPrice={item.promotionPrice}
                        />
                    );
                })}
            </ScCardsContainer>

            <ScBottomArtContainer>
                <ScLine />
                <ScSmallDot />
                <ScSmallDot />
            </ScBottomArtContainer>
        </ScRoot>
    );
};

Trending.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Trending;
