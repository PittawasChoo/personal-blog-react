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

const SmallCard = ({ imgUrl, brand, name, price }) => {
    return (
        <ScRoot>
            <ScCardBorder>
                <ScCard>
                    <ScCardImage $imgUrl={imgUrl} />
                    <ScCardDetailContainer>
                        <div>
                            <ScCardName>{name}</ScCardName>
                            <ScCardBrand>{brand}</ScCardBrand>
                        </div>
                        <ScCardPrice>${FormatToLocaleString(price)}</ScCardPrice>
                    </ScCardDetailContainer>
                </ScCard>
            </ScCardBorder>
            <ScCardShadow />
        </ScRoot>
    );
};

SmallCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    minimal: PropTypes.bool,
};

export default SmallCard;
