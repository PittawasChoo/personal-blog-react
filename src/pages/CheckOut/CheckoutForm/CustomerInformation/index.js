import React from "react";
import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField from "components/Fields/TextField";

import { ScFieldLabel, ScRequireMark, ScInputContainer } from "./styles";

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
                <span style={{ fontSize: "22px", fontWeight: 600 }}>CUSTOMER INFORMATION</span>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    borderTop: "1px solid #00000020",
                }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                                    backgroundColor: "#111111",
                                    color: "white",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleChange("panel2")}
                            >
                                Next
                            </div>
                        </div>
                    </div>
                </div>
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
