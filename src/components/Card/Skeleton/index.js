import React from "react";

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

const Skeleton = () => {
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

export default Skeleton;
