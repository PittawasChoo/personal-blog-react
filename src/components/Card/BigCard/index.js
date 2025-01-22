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
    ScCardPriceBeforePromotion,
    ScCardPromotionPrice,
    ScCardShadow,
    ScRoot,
} from "./styles";

const BigCard = ({ imgUrl, brand, name, price, promotionPrice }) => {
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
                        {promotionPrice ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-end",
                                    gap: "10px",
                                }}
                            >
                                <ScCardPromotionPrice>
                                    ${FormatToLocaleString(promotionPrice)}
                                </ScCardPromotionPrice>
                                {promotionPrice && (
                                    <ScCardPriceBeforePromotion>
                                        <s>${FormatToLocaleString(price)}</s>
                                    </ScCardPriceBeforePromotion>
                                )}
                            </div>
                        ) : (
                            <ScCardPrice>${FormatToLocaleString(price)}</ScCardPrice>
                        )}
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
    promotionPrice: PropTypes.number,
};

export default BigCard;
