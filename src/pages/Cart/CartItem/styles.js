import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScProductContainer = styled.div`
    width: 800px;
    display: grid;
    grid-template: 130px / 130px 1fr 120px 120px;
    font-family: oxanium;
    font-size: 20px;
`;

export const ScProductImage = styled.div`
    height: 130px;
    width: 130px;
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: bottom;
    border-radius: 5px;
`;

export const ScTextLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ScProductDetailContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ScProductName = styled.div`
    color: #111111;
    font-weight: 800;
`;

export const ScProductBrand = styled.div`
    font-size: 16px;
    color: #707070;
`;

export const ScProductSize = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    color: #707070;
`;

export const ScQuantityContainer = styled.div`
    display: inline-flex;
    border: 1px solid #00000040;
    border-radius: 5px;
    width: 110px;
    justify-content: space-between;
`;

export const ScQuantityButton = styled.div`
    font-weight: 500;
    height: 100%;
    padding: 10px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScQuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScQuantityInput = styled.div`
    width: 30px;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
`;

export const ScProductPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const ScProductPrice = styled.div`
    font-size: 18px;
    color: ${(props) => (props.$hasPromotionPrice ? "red" : "#111111")};
    padding-top: 4px;
`;

export const ScPriceBeforePromotion = styled.s`
    font-size: 16px;
    color: #777777;
`;

export const ScLine = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
`;
