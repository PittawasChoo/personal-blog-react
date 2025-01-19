import React from "react";

import { ScWarningImg, ScWelcomeTextContainer, ScText } from "./styles";

const WelcomeText = () => {
    return (
        <ScWelcomeTextContainer>
            <ScWarningImg src="images/shared/warning.png" alt="caution" width={18} height={18} />
            <ScText>WELCOME</ScText>
        </ScWelcomeTextContainer>
    );
};

export default WelcomeText;
