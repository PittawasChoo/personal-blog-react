import styled from "styled-components";

export const ScRoot = styled.div`
    width: 100%;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScBody = styled.div`
    font-family: inter;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
`;

export const ScHeader = styled.div`
    font-size: 70px;
    font-weight: 800;
    font-family: inter;
    margin-bottom: 24px;
`;

export const ScDescription = styled.div`
    text-align: center;
    font-size: 12px;
    line-height: 28px;
    font-weight: 300;
    font-family: inter;
    margin-bottom: 65px;
`;

export const ScFieldLabel = styled.div`
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 15px;
    width: 500px;
`;

export const ScRequireMark = styled.span`
    color: red;
`;

export const ScInputContainer = styled.div`
    margin-bottom: 30px;
`;

export const ScRadioGroupContainer = styled.div`
    width: 500px;
`;
