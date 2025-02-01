import React from "react";
import PropTypes from "prop-types";

import CircularProgress from "@mui/material/CircularProgress";
import MuiButton from "@mui/material/Button";

const BUTTON_STYLES = {
    width: "500px",
    fontSize: "15px",
    letterSpacing: "2px",
    fontWeight: 800,
    color: "white",
    backgroundColor: "black",
    borderRadius: "25px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const Button = ({ children, isLoading }) => {
    return (
        <MuiButton type="submit" style={BUTTON_STYLES} disabled={isLoading}>
            {isLoading && (
                <CircularProgress size="18px" style={{ color: "grey", marginRight: "20px" }} />
            )}
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    isLoading: PropTypes.bool,
};

export default Button;
