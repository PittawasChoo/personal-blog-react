import styled from "styled-components";

export const ScRoot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize + "px" : "16px")};
    font-family: space-explorer;
    color: ${(props) => (props.$negativeColor ? "white" : "black")};
`;

export const ScLogoText = styled.span`
    margin-right: 2px;
`;

export const ScLogoTextInvert = styled.span`
    background-color: #ff4f00;
    color: white;
    padding: 0 3px 0 3px;
    line-height: ${(props) => (props.$fontSize ? props.$fontSize + "px" : "16px")};
`;
