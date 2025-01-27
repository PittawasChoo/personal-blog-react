import styled from "styled-components";

export const ScRoot = styled.div`
    position: relative;
    fontfamily: oxanium;

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

export const ScCardBorder = styled.div`
    width: 310px;
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    height: 450px;
    background-color: #a8a8a8;
    position: relative;
    z-index: 2;
    cursor: pointer;
`;

export const ScCard = styled.div`
    width: 308px;
    height: 448px;
    overflow: hidden;
    color: black;
    background-color: #ffffff;
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    position: absolute;
    left: 1px;
    top: 1px;
`;

export const ScCardImage = styled.div`
    height: 300px;
    width: 100%;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScCardDetailContainer = styled.div`
    height: 150px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const ScCardBrand = styled.div`
    height: 11px;
    width: 150px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    margin-bottom: 10px;
`;

export const ScCardName = styled.div`
    height: 17px;
    width: 100%;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    margin-bottom: 4px;
`;

export const ScCardPrice = styled.div`
    height: 19px;
    width: 85px;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
    margin-bottom: 4px;
`;

export const ScCardPromotionPrice = styled.div`
    font-size: 19px;
    line-height: 19px;
    font-weight: 800;
`;

export const ScCardPriceBeforePromotion = styled.div`
    font-size: 14px;
    line-height: 14px;
    color: red;
`;

export const ScCardShadow = styled.div`
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    height: 450px;
    width: 310px;
    background-color: black;
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0.07;
`;
