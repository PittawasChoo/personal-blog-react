import styled from "styled-components";

export const ScRoot = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

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

export const ScBody = styled.div`
    width: 1500px;
    max-width: 1500px;
    padding: 80px 200px;
`;

export const ScHeader = styled.div`
    font-size: 70px;
    font-family: inter;
    color: #000000de;
    font-weight: 800;
    margin-bottom: 80px;
    text-align: center;
`;

export const ScContentContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;
`;

export const ScSummaryContainer = styled.div`
    width: 300px;
    flex-shrink: 0;
    position: relative;
`;

export const ScStickySummary = styled.div`
    font-family: oxanium;
    color: #111111;
    padding: 20px;
    border: 1px solid #999999;
    border-radius: 15px;
    position: sticky;
    top: 100px;
    margin-bottom: 20px;
`;

export const ScSummaryHeader = styled.div`
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: 800;
`;

export const ScPricingContainer = styled.div`
    display: grid;
    grid-template: auto 10px auto / 1fr 120px;
`;

export const ScLabel = styled.div`
    font-size: 16px;
    line-height: 16px;
    margin-bottom: ${(props) => (props.$showMargin ? "10px" : "0")};
`;

export const ScPrice = styled.div`
    font-size: 16px;
    line-height: 16px;
    text-align: right;
`;

export const ScLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
    margin-top: 20px;
`;

export const ScTotalPrice = styled.div`
    margin-top: 20px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
`;

export const ScCheckoutFormContainer = styled.div`
    width: 800px;
`;

export const ScLoadingPriceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const ScLoadingPrice = styled.div`
    width: 80px;
    height: 18px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;

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
