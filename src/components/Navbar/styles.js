import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ScRoot = styled.nav`
    width: 100vw;
    position: fixed;
    z-index: 99;
`;

export const ScGridContainer = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template: 80px / 180px auto 25% 25%;
    font-family: space-explorer;
`;

export const ScTextLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ScLogoContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
