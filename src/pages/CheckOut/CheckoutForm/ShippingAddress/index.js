import React from "react";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField from "components/Fields/TextField";

import {
    ScButtonsContainer,
    ScFieldLabel,
    ScFieldsContainer,
    ScHeader,
    ScInputContainer,
    ScPrimaryButton,
    ScRequireMark,
    ScSecondaryButton,
} from "./styles";

const ShippingAddress = ({ name, expandingPanel, handleChange, formProps }) => {
    const handleKeyDownForNumber = (e) => {
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
                <ScHeader>SHIPPING ADDRESS</ScHeader>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderTop: "1px solid #00000020",
                }}
            >
                <ScFieldsContainer>
                    <div>
                        <ScFieldLabel>
                            Address <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField height="30px" name="address" formProps={formProps} />
                        </ScInputContainer>

                        <ScFieldLabel>Additional Address</ScFieldLabel>
                        <ScInputContainer>
                            <TextField height="30px" name="address2" formProps={formProps} />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Province <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                height="30px"
                                name="province"
                                formProps={formProps}
                                onKeyDown={handleKeyDownForAlphabet}
                                inputProps={{
                                    inputMode: "text",
                                }}
                            />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Postal Code <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                height="30px"
                                name="postalCode"
                                formProps={formProps}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: 5,
                                }}
                                onKeyDown={handleKeyDownForNumber}
                            />
                        </ScInputContainer>
                        <ScButtonsContainer>
                            <ScSecondaryButton onClick={() => handleChange("panel1")}>
                                Back
                            </ScSecondaryButton>
                            <ScPrimaryButton onClick={() => handleChange("panel3")}>
                                Next
                            </ScPrimaryButton>
                        </ScButtonsContainer>
                    </div>
                </ScFieldsContainer>
            </AccordionDetails>
        </Accordion>
    );
};

ShippingAddress.propTypes = {
    name: PropTypes.string.isRequired,
    expandingPanel: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    formProps: PropTypes.object.isRequired,
};

export default ShippingAddress;
