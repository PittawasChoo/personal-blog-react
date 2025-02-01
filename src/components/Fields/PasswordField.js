import React, { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TEXT_FIELD_STYLES = {
    width: "500px",
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": { borderColor: "black" },
    },
    "& .MuiInputBase-input:focus": { color: "black" },
    "& .MuiFormLabel-root.Mui-focused": { color: "black" },
};
const INPUT_ADORMENT_STYLES = { marginRight: "-11px" };
const FONT_STYLES = { fontSize: 20 };

const PasswordField = ({ formProps, label = "" }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordIcon = () => setShowPassword(!showPassword);

    const { touched, errors, setFieldValue, values } = formProps;

    return (
        <TextField
            label={label}
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            sx={TEXT_FIELD_STYLES}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" sx={INPUT_ADORMENT_STYLES}>
                        <IconButton onClick={togglePasswordIcon}>
                            {showPassword ? (
                                <Visibility sx={FONT_STYLES} />
                            ) : (
                                <VisibilityOff sx={FONT_STYLES} />
                            )}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

PasswordField.propTypes = {
    formProps: PropTypes.object.isRequired,
    label: PropTypes.string,
};

export default PasswordField;
