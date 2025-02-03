import styled from "styled-components";

export const ScProductContainer = styled.div`
    width: 800px;
    display: grid;
    grid-template: 130px / 130px 1fr 120px 120px;
    font-family: oxanium;
    font-size: 20px;

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

export const ScProductImage = styled.div`
    height: 130px;
    width: 130px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    border-radius: 5px;
`;

export const ScProductDetailContainer = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ScProductName = styled.div`
    height: 18px;
    width: 200px;
    margin-top: 4px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScProductBrand = styled.div`
    height: 16px;
    margin-top: 8px;
    width: 90px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScProductSize = styled.div`
    height: 19px;
    width: 60px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScQuantityContainer = styled.div`
    display: inline-flex;
    border: 1px solid #00000040;
    border-radius: 5px;
    width: 110px;
    height: 38px;
    justify-content: space-between;
`;

export const ScProductPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const ScProductPrice = styled.div`
    height: 20px;
    width: 80px;
    margin-top: 4px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScLine = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
`;
