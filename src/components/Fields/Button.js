import React from "react";
import PropTypes from "prop-types";

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

const Button = ({ children }) => {
    return (
        <MuiButton type="submit" style={BUTTON_STYLES}>
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default Button;
