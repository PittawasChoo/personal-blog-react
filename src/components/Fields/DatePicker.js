import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const DATE_PICKER_STYLES = {
    width: "500px",
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "black",
        },
    },
};

const DatePicker = ({ formProps, name }) => {
    const { touched, errors, setFieldValue, values } = formProps;

    return (
        <MuiDatePicker
            name={name}
            value={values[name]}
            disableFuture
            sx={DATE_PICKER_STYLES}
            slotProps={{
                textField: {
                    error: touched[name] && Boolean(errors[name]),
                    helperText: touched[name] && errors[name],
                },
            }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(date) => setFieldValue(name, date)}
        />
    );
};

DatePicker.propTypes = {
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
};

export default DatePicker;
