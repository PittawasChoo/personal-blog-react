import styled from "styled-components";

export const ScRoot = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    position: relative;
    overflow: hidden;
    background-color: #f6f4f9;
`;

export const ScTextContainer = styled.div`
    padding: 0 70px;
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
    margin: 0 0 50px 0;
    font-size: 3vw;
    line-height: 3vw;
    font-weight: 800;
`;

export const ScBigTextInBrown = styled.span`
    color: #ff4f00;
`;

export const ScSmallText = styled.p`
    margin: 0;
    font-family: oxanium;
    font-size: 1.15vw;
    font-weight: 800;
    color: #666666;
`;

export const ScBackground = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/banner/about_us.png);
    background-size: cover;
    background-position: top;
`;

export const ScBackground2 = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/shared/background-circle.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    position: absolute;
    top: 0;
`;
