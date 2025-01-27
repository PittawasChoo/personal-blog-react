import styled from "styled-components";

export const ScErrorContainer = styled.div`
    display: flex;
    font-size: ${(props) => props.$fontSize || "14px"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: none;
`;

export const ScErrorText = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

export const ScButtonText = styled.span`
    margin-left: 5px;
`;
