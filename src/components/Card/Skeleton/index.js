import React from "react";
import PropTypes from "prop-types";

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
    ScSmallCard,
    ScSmallCardBorder,
    ScSmallCardBrand,
    ScSmallCardDetailContainer,
    ScSmallCardImage,
    ScSmallCardName,
    ScSmallCardShadow,
    ScSmallRoot,
} from "./styles";

const Skeleton = ({ isSmall = false }) => {
    if (isSmall) {
        return (
            <ScSmallRoot>
                <ScSmallCardBorder>
                    <ScSmallCard>
                        <ScSmallCardImage />
                        <ScSmallCardDetailContainer>
                            <div>
                                <ScSmallCardName />
                                <ScSmallCardName />
                                <ScSmallCardBrand />
                            </div>
                        </ScSmallCardDetailContainer>
                    </ScSmallCard>
                </ScSmallCardBorder>
                <ScSmallCardShadow />
            </ScSmallRoot>
        );
    }

    return (
        <ScRoot>
            <ScCardBorder>
                <ScCard>
                    <ScCardImage />
                    <ScCardDetailContainer>
                        <div>
                            <ScCardBrand />
                            <ScCardName />
                            <ScCardName />
                        </div>
                        <ScCardPrice />
                    </ScCardDetailContainer>
                </ScCard>
            </ScCardBorder>
            <ScCardShadow />
        </ScRoot>
    );
};

Skeleton.propTypes = {
    isSmall: PropTypes.bool.isRequired,
};

export default Skeleton;
