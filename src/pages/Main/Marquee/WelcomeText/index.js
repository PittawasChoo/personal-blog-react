import React from "react";

import { ScText, ScWarningImg, ScWelcomeTextContainer } from "./styles";

const WelcomeText = () => {
    return (
        <ScWelcomeTextContainer>
            <ScWarningImg src="/images/shared/warning.png" alt="warning" width={18} height={18} />
            <ScText>WELCOME</ScText>
        </ScWelcomeTextContainer>
    );
};

export default WelcomeText;
