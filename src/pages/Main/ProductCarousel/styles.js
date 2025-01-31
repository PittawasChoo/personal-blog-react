import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScRoot = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const ScLeftBox = styled.div`
    border: 1px solid #ff4f00;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 630px;
    width: 500px;
`;

export const ScCenterBox = styled.div`
    margin: 0 15px 0 15px;
    width: 1350px;
    height: 630px;
    flex: 1;
    border: 1px solid #ff4f00;
    border-radius: 15px;
`;

export const ScCenterBoxContentContainer = styled.div`
    width: 1320px;
    padding: 35px 50px 30px 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ScHeaderContainer = styled.div`
    height: 76px;
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: end;
`;

export const ScHeaderLabel = styled.div`
    font-size: 76px;
    font-weight: 1000;
    font-family: space-explorer;
    line-height: 76px;
    margin-right: 50px;
`;

export const ScButtonLabel = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const ScDot = styled.div`
    width: 3px;
    height: 1px;
    background-color: #ff4f00;
`;

export const ScLine = styled.div`
    width: 100px;
    height: 1px;
    background-color: #ff4f00;
`;

export const ScButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: oxanium;
    font-size: 14px;
    font-weight: 800;
    line-eight: 14px;
`;

export const ScButton = styled.div`
    border: 1px solid #ff4f00;
    color: #ff4f00;
    padding: 6px 22px 6px 30px;
    border-radius: 700px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ScBottomContentContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const ScLongLine = styled.div`
    height: 1px;
    background-color: #ff4f00;
    flex: 1;
    margin-right: 40px;
`;

export const ScPreviousButton = styled.div`
    border: 1px solid #ff4f00;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 20px;
`;

export const ScNextButton = styled.div`
    border: 1px solid #ff4f00;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 50%;
    cursor: pointer;
`;

export const ScRightBox = styled.div`
    border: 1px solid #ff4f00;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 630px;
    width: 500px;
`;

export const ScCarouselContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 140px;
`;

export const ScCarouselInnerContainer = styled.div`
    position: relative;
`;

export const ScTextLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
