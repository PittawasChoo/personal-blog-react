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
} from "./styles";

const CustomerInformation = ({ name, expandingPanel, handleChange, formProps }) => {
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
                <ScHeader>CUSTOMER INFORMATION</ScHeader>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderTop: "1px solid #00000020",
                }}
            >
                <ScFieldsContainer>
                    <div>
                        <ScFieldLabel>
                            First Name <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                onKeyDown={handleKeyDownForAlphabet}
                                inputProps={{
                                    inputMode: "text",
                                }}
                                height="30px"
                                name="firstName"
                                formProps={formProps}
                            />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Last Name <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                onKeyDown={handleKeyDownForAlphabet}
                                inputProps={{
                                    inputMode: "text",
                                }}
                                height="30px"
                                name="lastName"
                                formProps={formProps}
                            />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Email Address <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField height="30px" name="email" formProps={formProps} />
                        </ScInputContainer>

                        <ScFieldLabel>
                            Phone Number <ScRequireMark>*</ScRequireMark>
                        </ScFieldLabel>
                        <ScInputContainer>
                            <TextField
                                height="30px"
                                name="phoneNumber"
                                formProps={formProps}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: 10,
                                }}
                                onKeyDown={handleKeyDownForNumber}
                            />
                        </ScInputContainer>
                        <ScButtonsContainer>
                            <ScPrimaryButton onClick={() => handleChange("panel2")}>
                                Next
                            </ScPrimaryButton>
                        </ScButtonsContainer>
                    </div>
                </ScFieldsContainer>
            </AccordionDetails>
        </Accordion>
    );
};

CustomerInformation.propTypes = {
    name: PropTypes.string.isRequired,
    expandingPanel: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    formProps: PropTypes.object.isRequired,
};

export default CustomerInformation;
