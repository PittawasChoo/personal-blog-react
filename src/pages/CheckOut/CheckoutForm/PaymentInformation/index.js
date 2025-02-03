import React from "react";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DatePicker from "components/Fields/DatePicker";
import TextField from "components/Fields/TextField";

import {
    ScButtonsContainer,
    ScDoubleFieldsContainer,
    ScFieldLabel,
    ScFieldsContainer,
    ScHeader,
    ScInputContainer,
    ScPrimaryButton,
    ScRequireMark,
    ScSecondaryButton,
    ScSmallFieldContainer,
} from "./styles";

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
                <ScHeader>PAYMENT INFORMATION</ScHeader>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderTop: "1px solid #00000020",
                }}
            >
                <ScFieldsContainer>
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

                        <ScDoubleFieldsContainer>
                            <ScSmallFieldContainer>
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
                            </ScSmallFieldContainer>
                            <ScSmallFieldContainer>
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
                            </ScSmallFieldContainer>
                        </ScDoubleFieldsContainer>
                        <ScButtonsContainer>
                            <ScSecondaryButton onClick={() => handleChange("panel2")}>
                                Back
                            </ScSecondaryButton>
                            <ScPrimaryButton>Place Order</ScPrimaryButton>
                        </ScButtonsContainer>
                    </div>
                </ScFieldsContainer>
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
