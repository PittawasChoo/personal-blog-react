import React from "react";

import { ScText, ScWarningImg, ScWelcomeTextContainer } from "./styles";

const WelcomeText = () => {
    return (
        <ScWelcomeTextContainer>
            <ScWarningImg src="/images/shared/shirt.png" alt="shirt" width={30} height={30} />
            <ScText>TOP</ScText>
            <ScWarningImg src="/images/shared/shorts.png" alt="shorts" width={28} height={28} />
            <ScText>BOTTOM</ScText>
            <ScWarningImg src="/images/shared/shoes.png" alt="shoes" width={34} height={34} />
            <ScText>SHOES</ScText>
            <ScWarningImg src="/images/shared/bag.png" alt="bag" width={30} height={30} />
            <ScText>BAG</ScText>
            <ScWarningImg src="/images/shared/cyber.png" alt="cyber" width={24} height={24} />
            <ScText>CYBERPUNK</ScText>
            <ScWarningImg src="/images/shared/tech.png" alt="tech" width={30} height={30} />
            <ScText>TECH</ScText>
            <ScWarningImg src="/images/shared/warning.png" alt="warning" width={20} height={20} />
            <ScText>WEAR</ScText>
        </ScWelcomeTextContainer>
    );
};

export default WelcomeText;
