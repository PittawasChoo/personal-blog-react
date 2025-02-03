import React from "react";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DatePicker from "components/Fields/DatePicker";
import TextField from "components/Fields/TextField";

import { ScFieldLabel, ScRequireMark, ScInputContainer } from "./styles";

const PaymentInformation = ({ name, expandingPanel, handleChange, formProps }) => {
    const handleKeyDown = (e) => {
        if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleKeyDownForAlphabet = (e) => {
        if (e.key.length === 1 && !/[a-zA-Z\u0E00-\u0E7F\s.]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <Accordion
            expanded={expandingPanel === name}
            onChange={() => handleChange(name)}
            sx={{
                border: "1px solid #00000020",
                "&:before": {
                    display: "none",
                },
                "& .MuiAccordionDetails-root": {
                    padding: "16px",
                },
            }}
        >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span style={{ fontSize: "22px", fontWeight: 600 }}>PAYMENT INFORMATION</span>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderTop: "1px solid #00000020",
                }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <ScFieldLabel>
                            Cardholder's Full Name <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                height="30px"
                                name="cardholder"
                                formProps={formProps}
                                onKeyDown={handleKeyDownForAlphabet}
                                inputProps={{
                                    inputMode: "text",
                                }}
                            />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Card Number <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                height="30px"
                                name="cardNumber"
                                formProps={formProps}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: 16,
                                }}
                                onKeyDown={handleKeyDown}
                            />
                        </ScInputContainer>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ width: "230px" }}>
                                <ScFieldLabel>
                                    Expiration Date <ScRequireMark>*</ScRequireMark>
                                </ScFieldLabel>
                                <ScInputContainer>
                                    <DatePicker
                                        width="230px"
                                        height="30px"
                                        name="expDate"
                                        formProps={formProps}
                                        views={["year", "month"]}
                                        format="MM/YY"
                                    />
                                </ScInputContainer>
                            </div>
                            <div style={{ width: "230px" }}>
                                <ScFieldLabel>
                                    CVV <ScRequireMark>*</ScRequireMark>
                                </ScFieldLabel>
                                <ScInputContainer>
                                    <TextField
                                        width="230px"
                                        height="30px"
                                        name="cvv"
                                        formProps={formProps}
                                        inputProps={{
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",
                                            maxLength: 3,
                                        }}
                                        onKeyDown={handleKeyDown}
                                    />
                                </ScInputContainer>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginBottom: "20px",
                            }}
                        >
                            <div
                                style={{
                                    padding: "4px 20px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleChange("panel2")}
                            >
                                Back
                            </div>
                            <button
                                type="submit"
                                style={{
                                    padding: "4px 20px",
                                    backgroundColor: "#111111",
                                    color: "white",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
    );
};

PaymentInformation.propTypes = {
    name: PropTypes.string.isRequired,
    expandingPanel: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    formProps: PropTypes.object.isRequired,
};

export default PaymentInformation;
