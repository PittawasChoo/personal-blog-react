import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ScRoot = styled.nav`
    width: 100vw;
    position: fixed;
    z-index: 99;
    color: white;
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

export const ScCartItems = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff4f00;
    font-size: 8px;
    line-height: 10px;
    margin-top: -7px;
    margin-left: -5px;
    font-family: oxanium;
    border: 1px solid black;
`;
