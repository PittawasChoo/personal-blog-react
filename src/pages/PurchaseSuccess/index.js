import React from "react";

import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

import { ScBody, ScButtonsContainer, ScButtonText, ScRoot } from "./styles";

const PurchaseSuccess = () => {
    const navigate = useNavigate();

    return (
        <ScRoot>
            <ScBody>
                <CheckCircleIcon sx={{ fontSize: "200px", color: "green" }} />
                <div style={{ fontSize: "40px", marginBottom: "10px", fontFamily: "oxanium" }}>
                    Your Order Has Been Placed
                </div>
                <div style={{ fontSize: "22px", marginBottom: "50px", fontFamily: "oxanium" }}>
                    Thank You For Shopping With Us
                </div>
                <ScButtonsContainer>
                    <Button
                        size="large"
                        variant="contained"
                        style={{ textTransform: "none", width: "150px" }}
                        onClick={() => navigate("/history")}
                    >
                        <ScButtonText>History</ScButtonText>
                    </Button>
                    <Button
                        size="large"
                        variant="outlined"
                        style={{ textTransform: "none", width: "150px" }}
                        onClick={() => navigate("/")}
                    >
                        <ScButtonText>Home</ScButtonText>
                    </Button>
                </ScButtonsContainer>
            </ScBody>
        </ScRoot>
    );
};

export default PurchaseSuccess;
