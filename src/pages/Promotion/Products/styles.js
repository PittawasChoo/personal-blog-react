import styled from "styled-components";

export const ScBodyContainer = styled.div`
    width: 100vw;
    min-height: calc(100vh - 280px);
    background-color: white;
    padding: 240px 50px 50px 50px;
    color: black;
    display: flex;
    justify-content: center;
`;

export const ScNoItemBodyContainer = styled.div`
    width: 100vw;
    min-height: calc(100vh - 280px);
    background-color: white;
    padding-top: 200px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: oxanium;
`;

export const ScNoItemBody = styled.div`
    margin-top: -50px;
`;

export const ScBody = styled.div`
    width: 100vw;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const ScCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;
