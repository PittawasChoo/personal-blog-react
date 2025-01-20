import styled from "styled-components";

export const ScRoot = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

export const ScGridBox = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    display: grid;
    grid-template: 80px 1fr 1fr 80px / 180px auto 25% 25%;
`;

export const ScGridItem = styled.div`
    border-right: 1px solid white;
    border-bottom: 1px solid white;
`;

export const ScGridItemForLogo = styled.div`
    border-bottom: 1px solid white;
`;

export const ScGridItemForOtherMenu = styled.div`
    grid-area: 1 / 3 / 2 / 5;
    border-bottom: 1px solid white;
`;

export const ScGridImage = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(20, 20, 20);
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: center;
`;

export const ScGridItemForSecondGridImage = styled.div`
    border-bottom: 1px solid white;
`;

export const ScGridItemForCaution = styled.div`
    border-right: 1px solid white;
    grid-area: 3 / 1 / 5 / 2;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
`;

export const ScCautionLogo = styled.div`
    width: 120px;
    height: 140px;
    background-image: url(/images/banner/multi_symbol.png);
    background-size: cover;
    background-position: center;
`;

export const ScCautionLine = styled.div`
    width: 120px;
    height: 2px;
    background-color: white;
    margin-top: 9px;
    margin-bottom: 5px;
`;

export const ScCautionArea = styled.div`
    font-size: 18px;
    width: 100%;
    line-height: 18px;
    text-align: center;
`;

export const ScCautionText = styled.div`
    font-size: 18px;
    text-align: start;
    line-height: 18px;
    width: 100%;
    padding-left: 5px;
`;

export const ScKeepOutImage = styled.div`
    width: 120px;
    height: 15px;
    background-image: url(/images/banner/line_symbol.png);
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScShortWarning = styled.div`
    font-size: 9px;
    margin-bottom: 3px;
`;

export const ScLongWarning = styled.div`
    font-size: 6px;
    text-align: justify;
`;

export const ScShopNameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
`;

export const ScShopNameFirstRow = styled.div`
    font-family: space-explorer;
    font-size: 60px;
    display: flex;
    align-items: start;
`;

export const ScTradeMarkSymbol = styled.div`
    border: 1px solid white;
    border-radius: 50%;
    font-size: 15px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScShopNameSecondRow = styled.div`
    font-family: space-explorer;
    font-size: 60px;
`;

export const ScShopNameBrown = styled.span`
    color: #ff4f00;
`;

export const ScGridItemForSecondLogo = styled.div`
    border-bottom: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScSecondLogo = styled.div`
    width: 300px;
    height: 90px;
    background-image: url(/images/banner/symbol.png);
    background-size: cover;
    background-position: center;
`;

export const ScSecondLogoLine = styled.div`
    width: 300px;
    height: 2px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: white;
`;

export const ScSecondLogoText = styled.div`
    font-family: space-explorer;
    font-size: 12px;
    text-align: end;
`;

export const ScGridItemForSlogan = styled.div`
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    padding-left: 60px;
`;

export const ScSloganText = styled.div`
    font-size: 8px;
    padding-left: 4px;
`;

export const ScSloganImage = styled.div`
    width: 200px;
    height: 8px;
    background-image: url(/images/banner/line_symbol2.png);
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScGridItemForSponsors = styled.div`
    grid-area: 4 / 3 / 5 / 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;
`;

export const ScSponsorsLabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScSponsorsLabelIcon = styled.div`
    width: 12px;
    height: 12px;
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScSponsorsLabel = styled.div`
    font-size: 12px;
    line-height: 12px;
    margin: 0 15px;
`;

export const ScSponsorLogo = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${(props) => props.$imgUrl || ""});
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScSponsorLogo2 = styled.div`
    width: 50px;
    height: 45px;
    background-image: url(/images/banner/sponsor_logo2.png);
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScBarCode = styled.div`
    width: 130px;
    height: 35px;
    background-image: url(/images/banner/barcode.png);
    background-size: cover;
    background-position: center;
    margin: 6px 0 6px 0;
`;

export const ScOverlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const ScBackground = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(/images/banner/background.png);
    background-size: cover;
    background-position: bottom;
`;
