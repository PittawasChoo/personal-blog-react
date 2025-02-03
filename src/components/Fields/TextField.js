import React from "react";
import PropTypes from "prop-types";

import MuiTextField from "@mui/material/TextField";

const TEXT_FIELD_STYLES = (width, height) => ({
    width,
    "& .MuiOutlinedInput-root": {
        height,
        "&.Mui-focused fieldset": { borderColor: "black" },
    },
    "& .MuiInputBase-input:focus": { color: "black" },
    "& .MuiFormLabel-root.Mui-focused": { color: "black" },
});

const TextField = ({
    formProps,
    name,
    label = "",
    width = "500px",
    height = "56px",
    onKeyDown = () => {},
    inputProps = {},
}) => {
    const { touched, errors, setFieldValue, values } = formProps;

    return (
        <MuiTextField
            label={label}
            name={name}
            value={values[name]}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name]}
            onChange={(e) => setFieldValue(name, e.target.value)}
            variant="outlined"
            sx={TEXT_FIELD_STYLES(width, height)}
            inputProps={inputProps}
            onKeyDown={onKeyDown}
        />
    );
};

TextField.propTypes = {
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    onKeyDown: PropTypes.func,
    inputProp: PropTypes.object,
};

export default TextField;
