import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScRoot = styled.div`
    background-color: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0 40px 0;
    width: 100vw;
`;

export const ScTopSectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 1110px;
    gap: 40px;
    font-family: oxanium;
`;

export const ScShopDescription = styled.div`
    font-size: 14px;
    margin-top: 24px;
    line-height: 26px;
`;

export const ScPagesPortalContainer = styled.div`
    display: flex;
    gap: 120px;
    padding-top: 10px;
`;

export const ScPagesPortalHeader = styled.div`
    font-weight: 800;
`;

export const ScTextLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ScPagePortal = styled.div`
    margin-top: 30px;
`;

export const ScSectionLine = styled.div`
    width: 1110px;
    height: 1px;
    background-color: #ff4f00;
    margin: 50px 0 30px 0;
`;

export const ScBottomSectionContainer = styled.div`
    width: 1110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ScCopyRightText = styled.div`
    font-family: oxanium;
    font-size: 12px;
    line-height: 14px;
`;

export const ScSocialMediaLogosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;
