import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const DATE_PICKER_STYLES = (width, height) => ({
    width,
    "& .MuiOutlinedInput-root": {
        height,
        "&.Mui-focused fieldset": {
            borderColor: "black",
        },
    },
});

const DatePicker = ({
    formProps,
    name,
    width = "500px",
    height = "56px",
    disableFuture = false,
    views = ["year", "month", "day"],
    format = "DD/MM/YYYY",
}) => {
    const { touched, errors, setFieldValue, values } = formProps;

    return (
        <MuiDatePicker
            name={name}
            value={values[name]}
            sx={DATE_PICKER_STYLES(width, height)}
            slotProps={{
                textField: {
                    error: touched[name] && Boolean(errors[name]),
                    helperText: touched[name] && errors[name],
                },
            }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(date) => setFieldValue(name, date)}
            disableFuture={disableFuture}
            views={views}
            format={format}
        />
    );
};

DatePicker.propTypes = {
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    disableFuture: PropTypes.bool,
    views: PropTypes.array,
    format: PropTypes.string,
};

export default DatePicker;
