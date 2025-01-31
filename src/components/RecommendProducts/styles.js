import styled from "styled-components";

export const ScRoot = styled.div`
    background-image: url(/images/samples/Circle.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 60px;
    position: relative;
`;

export const ScHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const ScHeaderLabel = styled.div`
    font-family: space-explorer;
    font-size: 80px;
    font-weight: 800;
    color: black;
    line-height: 80px;
`;

export const ScDotsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
`;

export const ScDot = styled.div`
    width: 3px;
    height: 3px;
    background-color: #ff4f00;
`;

export const ScCardsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;

export const ScBottomArtContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 30px;
    right: 10px;
    height: 2px;
    gap: 10px;
`;

export const ScLine = styled.div`
    background-color: #ff4f00;
    height: 1px;
    width: 500px;
`;

export const ScSmallDot = styled.div`
    width: 4px;
    height: 1px;
    background-color: #ff4f00;
`;
