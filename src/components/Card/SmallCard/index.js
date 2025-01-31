import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { FormatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScCard,
    ScCardBorder,
    ScCardBrand,
    ScCardDetailContainer,
    ScCardImage,
    ScCardName,
    ScCardPrice,
    ScCardPriceBeforePromotion,
    ScCardPromotionPrice,
    ScCardShadow,
    ScPriceContainer,
    ScRoot,
} from "./styles";

const SmallCard = ({ id, imgUrl, brand, name, price, promotionPrice }) => {
    return (
        <Link to={`/product?id=${id}`}>
            <ScRoot>
                <ScCardBorder>
                    <ScCard>
                        <ScCardImage $imgUrl={imgUrl} />
                        <ScCardDetailContainer>
                            <div>
                                <ScCardName>{name}</ScCardName>
                                <ScCardBrand>{brand}</ScCardBrand>
                            </div>
                            {promotionPrice ? (
                                <ScPriceContainer>
                                    <ScCardPromotionPrice>
                                        ${FormatToLocaleString(promotionPrice)}
                                    </ScCardPromotionPrice>
                                    {promotionPrice && (
                                        <ScCardPriceBeforePromotion>
                                            <s>${FormatToLocaleString(price)}</s>
                                        </ScCardPriceBeforePromotion>
                                    )}
                                </ScPriceContainer>
                            ) : (
                                <ScCardPrice>${FormatToLocaleString(price)}</ScCardPrice>
                            )}
                        </ScCardDetailContainer>
                    </ScCard>
                </ScCardBorder>
                <ScCardShadow />
            </ScRoot>
        </Link>
    );
};

SmallCard.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promotionPrice: PropTypes.number,
};

export default SmallCard;
