import styled from "styled-components";

export const ScRoot = styled.div`
    min-height: 100vh;
    width: 100vw;
`;

export const ScNavbarSpaceReserve = styled.div`
    width: 100vw;
    height: 80px;
    background-color: black;
    position: absolute;
`;

export const ScBody = styled.div`
    width: 100%;
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    min-height: calc(100vh - 80px);
`;
