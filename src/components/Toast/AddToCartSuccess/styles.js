import styled from "styled-components";

export const ScHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ScProductContainer = styled.div`
    display: flex;
    alignitems: center;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ScProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;
    font-family: oxanium;
`;

export const ScProductLabelPrimary = styled.div`
    font-size: 15px;
    line-height: 15px;
    font-weight: 800;
    text-transform: uppercase;
`;

export const ScProductLabelSecondary = styled.div`
    font-size: 12px;
    line-height: 12px;
    color: #00000080;
`;

export const ScProductPriceContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const ScProductPriceBefore = styled.s`
    font-size: 15px;
    line-height: 15px;
    color: #00000080;
`;

export const ScButton = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #00000080;
    padding: 5px 0;
    border-radius: 20px;
    font-family: oxanium;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
`;
