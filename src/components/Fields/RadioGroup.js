import React from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MuiRadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

const RADIO_STYLES = {
    "& .MuiSvgIcon-root": {
        fontSize: 16,
    },
};
const FORM_CONTROL_LABEL_STYLES = {
    marginRight: "30px",
    "& .MuiTypography-root": {
        fontSize: "14px",
        fontWeight: 200,
    },
};
const FORM_HELPER_TEXT_STYLES = { color: "#D32f2f" };

const RadioGroup = ({ formProps, name, options, row = false }) => {
    const { touched, errors, setFieldValue, values } = formProps;

    return (
        <>
            <MuiRadioGroup
                name={name}
                value={values[name]}
                row={row}
                onChange={(e) => setFieldValue(name, e.target.value)}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.label}
                        value={option.value}
                        control={<Radio sx={RADIO_STYLES} />}
                        label={option.label}
                        sx={FORM_CONTROL_LABEL_STYLES}
                    />
                ))}
            </MuiRadioGroup>
            {touched[name] && errors[name] && (
                <FormHelperText sx={FORM_HELPER_TEXT_STYLES}>{errors[name]}</FormHelperText>
            )}
        </>
    );
};

RadioGroup.propTypes = {
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    row: PropTypes.bool,
};

export default RadioGroup;
