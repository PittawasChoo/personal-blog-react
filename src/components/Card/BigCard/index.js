import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import LazyImage from "components/LazyImage";
import { formatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScCard,
    ScCardBorder,
    ScCardBrand,
    ScCardDetailContainer,
    ScCardName,
    ScCardPrice,
    ScCardPriceBeforePromotion,
    ScCardPromotionPrice,
    ScCardShadow,
    ScPriceContainer,
    ScRoot,
} from "./styles";

const BigCard = ({ id, imgUrl, brand, name, price, promotionPrice }) => {
    return (
        <Link to={`/product?id=${id}`}>
            <ScRoot>
                <ScCardBorder>
                    <ScCard>
                        <LazyImage
                            src={imgUrl}
                            alt={`product-${id}-image`}
                            style={{ width: "308px", height: "300px" }}
                        />
                        <ScCardDetailContainer>
                            <div>
                                <ScCardBrand>{brand}</ScCardBrand>
                                <ScCardName>{name}</ScCardName>
                            </div>
                            {promotionPrice ? (
                                <ScPriceContainer>
                                    <ScCardPromotionPrice>
                                        ${formatToLocaleString(promotionPrice)}
                                    </ScCardPromotionPrice>
                                    {promotionPrice && (
                                        <ScCardPriceBeforePromotion>
                                            <s>${formatToLocaleString(price)}</s>
                                        </ScCardPriceBeforePromotion>
                                    )}
                                </ScPriceContainer>
                            ) : (
                                <ScCardPrice>${formatToLocaleString(price)}</ScCardPrice>
                            )}
                        </ScCardDetailContainer>
                    </ScCard>
                </ScCardBorder>
                <ScCardShadow />
            </ScRoot>
        </Link>
    );
};

BigCard.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    promotionPrice: PropTypes.number,
};

export default BigCard;
