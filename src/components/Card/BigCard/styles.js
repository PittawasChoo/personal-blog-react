import styled from "styled-components";

export const ScRoot = styled.div`
    position: relative;
    fontfamily: oxanium;
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
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: bottom;
`;

export const ScCardDetailContainer = styled.div`
    height: 150px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const ScCardBrand = styled.div`
    color: grey;
    font-size: 11px;
    line-height: 11px;
    text-transform: uppercase;
`;

export const ScCardName = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 17px;
    text-transform: uppercase;
`;

export const ScCardPrice = styled.div`
    font-size: 19px;
    line-height: 19px;
    font-weight: 800;
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
