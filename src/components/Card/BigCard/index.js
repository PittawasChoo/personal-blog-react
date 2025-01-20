import React from "react";
import PropTypes from "prop-types";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScCard,
    ScCardBorder,
    ScCardBrand,
    ScCardDetailContainer,
    ScCardImage,
    ScCardName,
    ScCardPrice,
    ScCardShadow,
    ScRoot,
} from "./styles";

const BigCard = ({ imgUrl, brand, name, price }) => {
    return (
        <ScRoot>
            <ScCardBorder>
                <ScCard>
                    <ScCardImage $imgUrl={imgUrl} />
                    <ScCardDetailContainer>
                        <div>
                            <ScCardBrand>{brand}</ScCardBrand>
                            <ScCardName>{name}</ScCardName>
                        </div>
                        <ScCardPrice>${FormatToLocaleString(price)}</ScCardPrice>
                    </ScCardDetailContainer>
                </ScCard>
            </ScCardBorder>
            <ScCardShadow />
        </ScRoot>
    );
};

BigCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default BigCard;
