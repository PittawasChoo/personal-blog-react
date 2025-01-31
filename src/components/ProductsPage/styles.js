import styled from "styled-components";
import { motion } from "framer-motion";

export const ScRoot = styled.div`
    background-color: white;
`;

export const ScDynamicSizeHeaderContainer = styled(motion.div)`
    background-color: white;
    color: black;
    position: fixed;
    z-index: 98;
    width: 100vw;
    font-size: 70px;
    font-family: oxanium;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 70px;
    padding: 50px 50px;
`;

export const ScHeaderContainer = styled.div`
    width: 100vw;
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 800;
`;

export const ScHeaderToolsContainer = styled.div`
    margin-right: 5px;
    display: flex;
    gap: 30px;
    align-items: center;
`;

export const ScSearchContainer = styled.div`
    width: 320px;
    height: 30px;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: 1px solid black;
    color: #c5c5c5;
    overflow: hidden;
`;

export const ScInput = styled.input`
    height: 30px;
    width: 240px;
    border: none;
    outline: none;
    padding: 0 15px;
`;

export const ScRemoveInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScRemoveIconContainer = styled.div`
    width: 18px;
    height: 18px;
    background-color: #c5c5c5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ScSearchIconContainer = styled.div`
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

export const ScToolButtonContainer = styled.div`
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    display: flex;
    gap: 6px;
    align-items: center;
    position: relative;
`;

export const ScOrangeDot = styled.div`
    width: 7px;
    height: 7px;
    background-color: #ff4f00;
    border-radius: 50%;
    position: absolute;
    border: 1px solid white;
    top: -3px;
    right: -6px;
`;

export const ScSortingLoadingContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScErrorContainer = styled.div`
    width: 220px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScHeaderLabel = styled.span`
    white-space: pre;
`;

export const ScColon = styled.span`
    color: #ff4f00;
`;
