import styled from "styled-components";
import { motion } from "framer-motion";

export const ScRoot = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 3;
`;

export const ScGridContainer = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template: 80px / 180px auto 25% 25%;
    font-family: space-explorer;
`;

export const ScLogoContainer = styled.div`
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;

export const ScLogoText = styled.span`
    margin-right: 2px;
`;

export const ScLogoTextInvert = styled.span`
    background-color: #826858;
    color: white;
    padding: 0 3px 0 3px;
    line-height: 16px;
`;

export const ScProductsMenuContainer = styled.div`
    padding-left: 60px;
    display: flex;
    align-items: center;
`;

export const ScOtherMenuContainer = styled.div`
    padding: 0 60px 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: 1 / 3 / 2 / 5;
`;

export const ScMenuContainer = styled.div`
    display: flex;
    gap: 25px;
`;

export const ScMenuLabel = styled.div`
    font-size: 12px;
    display: flex;
    align-items: start;
    cursor: pointer;
`;

export const ScMenuNumber = styled.div`
    font-size: 8px;
    margin-top: -5px;
`;
