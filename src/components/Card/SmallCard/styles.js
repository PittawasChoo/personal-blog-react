import styled from "styled-components";

export const ScRoot = styled.div`
    position: relative;
    font-family: oxanium;
    width: 280px;
    margin-right: 60px;
    margin-bottom: 5px;
`;

export const ScCardBorder = styled.div`
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    height: 380px;
    background-color: #a8a8a8;
    position: relative;
    z-index: 2;
    cursor: pointer;
`;

export const ScCard = styled.div`
    width: 278px;
    height: 378px;
    overflow: hidden;
    color: black;
    background-color: #ffffff;
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    position: absolute;
    left: 1px;
    top: 1px;
`;

export const ScCardImage = styled.div`
    height: 280px;
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: bottom;
`;

export const ScCardDetailContainer = styled.div`
    height: 120px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

export const ScCardName = styled.div`
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
`;

export const ScCardBrand = styled.div`
    margin-top: 8px;
    color: grey;
    font-size: 8px;
    line-height: 8px;
    text-transform: uppercase;
`;

export const ScCardPrice = styled.div`
    margin-left: 20px;
    font-size: 17px;
    line-height: 17px;
    font-weight: 800;
`;

export const ScCardPromotionPrice = styled.div`
    margin-left: 20px;
    font-size: 17px;
    line-height: 17px;
    font-weight: 800;
`;

export const ScCardPriceBeforePromotion = styled.div`
    font-size: 12px;
    line-height: 12px;
    color: red;
    margin-top: 5px;
`;

export const ScCardShadow = styled.div`
    clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
    height: 380px;
    width: 280px;
    background-color: black;
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0.07;
`;
