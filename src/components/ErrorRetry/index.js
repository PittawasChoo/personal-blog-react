import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { ScButtonsContainer, ScButtonText, ScErrorContainer, ScErrorText } from "./styles";

const STYLES = {
    s: {
        fontSize: "14px",
        buttonSize: "small",
        iconSize: 12,
    },
    m: {
        fontSize: "16px",
        buttonSize: "medium",
        iconSize: 12,
    },
    l: {
        fontSize: "20px",
        buttonSize: "large",
        iconSize: 14,
    },
};

const ErrorRetry = ({ label, onRetry, size = "s", showHomeButton = false }) => {
    const navigate = useNavigate();

    const selectedSizeStyles = STYLES[size];

    return (
        <ScErrorContainer $fontSize={selectedSizeStyles.fontSize}>
            <ScErrorText>Unable to load {label}. Please try again.</ScErrorText>
            <ScButtonsContainer>
                <Button
                    size={selectedSizeStyles.buttonSize}
                    variant="outlined"
                    style={{ textTransform: "none" }}
                    onClick={onRetry}
                >
                    <img
                        src="/images/shared/reload.png"
                        alt="close"
                        width={selectedSizeStyles.iconSize}
                        height={selectedSizeStyles.iconSize}
                        loading="lazy"
                    />
                    <ScButtonText>Retry</ScButtonText>
                </Button>
                {showHomeButton && (
                    <Button
                        size={selectedSizeStyles.buttonSize}
                        variant="text"
                        style={{ textTransform: "none" }}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Button>
                )}
            </ScButtonsContainer>
        </ScErrorContainer>
    );
};

ErrorRetry.propTypes = {
    label: PropTypes.string.isRequired,
    onRetry: PropTypes.func.isRequired,
    size: PropTypes.string,
    showHomeButton: PropTypes.bool,
};

export default ErrorRetry;
