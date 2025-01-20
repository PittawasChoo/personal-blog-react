import styled from "styled-components";

export const ScRoot = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    background-color: #f6f4f9;
`;

export const ScTextContainer = styled.div`
    padding: 0 15vw;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ScTextInnerContainer = styled.div`
    width: 100%;
    margin: 0;
    color: black;
    text-align: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ScBigText = styled.p`
    font-family: space-explorer;
    margin: 0;
    font-size: 6vw;
    line-height: 7vw;
    font-weight: 800;
`;

export const ScBigTextInBrown = styled.span`
    color: #ff4f00;
`;

export const ScLineContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    gap: 0.6vw;
`;

export const ScDot = styled.div`
    width: 0.3vw;
    height: 2px;
    background-color: #ff4f00;
`;

export const ScLongLine = styled.div`
    height: 2px;
    width: 23vw;
    background-color: #ff4f00;
`;

export const ScSmallText = styled.p`
    margin: 0;
    font-family: oxanium;
    font-size: 1.25vw;
    font-weight: 800;
    color: #666666;
`;

export const ScBackground = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/banner/banner_2.png);
    background-size: cover;
    background-position: top;
`;

export const ScBackground2 = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/samples/Circle.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    position: absolute;
    top: 0;
`;
