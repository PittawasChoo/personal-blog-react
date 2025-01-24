import styled from "styled-components";

export const ScBodyContainer = styled.div`
    width: 100vw;
    background-color: white;
    margin-top: 200px;
    padding: 50px 50px;
    color: black;
    display: flex;
    justify-content: center;
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
