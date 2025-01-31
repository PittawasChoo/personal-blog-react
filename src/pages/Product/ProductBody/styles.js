import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScRoot = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 60px 200px 60px 200px;
    min-height: 100vh;

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`;

export const ScBodyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
`;

export const ScImageContainer = styled.div`
    position: relative;
`;

export const ScStickyImage = styled.div`
    position: sticky;
    width: 500px;
    height: 500px;
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: bottom;
    top: 120px;
    border-radius: 5px;
`;

export const ScStickyLoadingImage = styled.div`
    position: sticky;
    width: 500px;
    height: 500px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    top: 120px;
    border-radius: 5px;
`;

export const ScProductDetailContainer = styled.div`
    background-color: white;
    width: 520px;

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ScBrand = styled.div`
    font-size: 18px;
    line-height: 18px;
    color: #00000080;
    margin-bottom: 20px;
    font-family: oxanium;
`;

export const ScLoadingBrand = styled.div`
    height: 18px;
    width: 200px;
    margin-bottom: 20px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScName = styled.div`
    font-size: 30px;
    line-height: 30px;
    font-weight: 800;
    text-transform: uppercase;
    font-family: oxanium;
`;

export const ScLoadingName = styled.div`
    height: 30px;
    width: 100%;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: #d9d9d9;
    margin: 40px 0;
`;

export const ScDetailContainer = styled.div`
    margin-bottom: 40px;
`;

export const ScLabel = styled.div`
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 10px;
    font-family: oxanium;
    font-weight: 800;
`;

export const ScPriceText = styled.div`
    font-family: oxanium;
`;

export const ScPrice = styled.span`
    font-size: 25px;
    line-height: 25px;
    font-weight: 800;
    color: ${(props) => props.$fontColor};
`;

export const ScLoadingPrice = styled.div`
    height: 25px;
    width: 150px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScBeforePromotionPrice = styled.s`
    font-size: 18px;
    line-height: 18px;
    margin-left: 10px;
`;

export const ScSaleBadge = styled.div`
    display: inline-block;
    font-size: 14px;
    font-weight: 14px;
    color: white;
    background-color: red;
    padding: 0 15px;
    font-weight: 800;
    margin-top: 10px;
`;

export const ScSizeOptionsContainer = styled.div`
    display: flex;
    margin-bottom: 40px;
`;

export const ScLoadingSize = styled.div`
    height: 48px;
    width: 100%;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    margin-bottom: 40px;
`;

export const ScSizeButton = styled.div`
    border-style: solid;
    text-transform: uppercase;
    font-family: oxanium;
    font-size: 16px;
    padding: 10px;
    min-width: 60px;
    border-radius: 5px;
    text-align: center;
    margin-right: 15px;
    cursor: pointer;

    ${(props) => {
        console.log("props.$isSelected", props.$isSelected);
        if (props.$isSelected) {
            return `
                border-width: 2px;
                border-color: #000000;
                font-weight: 800;
            `;
        }

        return `
            border-width: 1px;
            border-color: #00000040;
            font-weight: 500;
        `;
    }};
`;

export const ScQuantityContainer = styled.div`
    display: inline-flex;
    border: 1px solid #00000040;
    border-radius: 5px;
`;

export const ScQuantityButton = styled.div`
    font-weight: 500;
    height: 100%;
    padding: 10px 10px;
    font-size: 18px;
    cursor: pointer;
`;

export const ScQuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScQuantityInput = styled.input`
    height: 40px;
    width: 60px;
    border: none;
    outline: none;
    padding: 0 15px;
    text-align: center;
    font-size: 16px;
`;

export const ScStock = styled.div`
    font-size: 14px;
    line-height: 14px;
    color: #00000080;
    margin-top: 10px;
`;

export const ScAddToCartButton = styled.div`
    width: 200px;
    background-color: black;
    border-radius: 25px;
    padding: 10px 0;
    color: white;
    text-align: center;
    font-weight: 800;
    cursor: pointer;
`;

export const ScDisabledButton = styled.div`
    width: 200px;
    background-color: #00000060;
    border-radius: 25px;
    padding: 10px 0;
    color: white;
    text-align: center;
    font-weight: 800;
    cursor: not-allowed;
`;

export const ScFreeShipping = styled.div`
    margin-bottom: 40px;
`;

export const ScPolicyContainer = styled.div`
    margin-bottom: 10px;
    line-height: 18px;
    display: flex;
    align-items: center;
`;

export const ScOrangeDot = styled.div`
    padding: 3px 3px;
    background-color: #ff4f00;
    margin-right: 15px;
`;

export const ScTextLink = styled(Link)`
    color: black;
    font-weight: 800;
`;

export const ScErrorContainer = styled.div`
    height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    justify-content: center;
`;
