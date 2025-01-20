import React from "react";

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

const Trending = () => {
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
                <BigCard
                    imgUrl={"/images/samples/sample1.png"}
                    brand={"Nova Forge"}
                    name={"Worker boots New Era - NF0092"}
                    price={99123.45}
                />
                <BigCard
                    imgUrl={"/images/samples/sample2.png"}
                    brand={"SynLux"}
                    name={"SynLux - Luxury Tactical Satchel"}
                    price={99123.45}
                />
                <BigCard
                    imgUrl={"/images/samples/sample3.png"}
                    brand={"Luminara"}
                    name={"Double layer warmtech jacket - LN2613"}
                    price={99123.45}
                />
                <BigCard
                    imgUrl={"/images/samples/sample4.png"}
                    brand={"Arasaka"}
                    name={"Hard leather jacket - Military grade"}
                    price={99123.45}
                />
            </ScCardsContainer>

            <ScBottomArtContainer>
                <ScLine />
                <ScSmallDot />
                <ScSmallDot />
            </ScBottomArtContainer>
        </ScRoot>
    );
};

export default Trending;
