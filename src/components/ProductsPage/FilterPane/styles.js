import styled from "styled-components";

export const ScRoot = styled.div`
    text-transform: uppercase;
    min-height: 100vh;
    position: relative;
`;

export const ScFixedHeader = styled.div`
    background-color: white;
    height: 85px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999;
    border-bottom: 1px solid #dddddd;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);
    padding: 0 20px;
`;

export const ScPaneHeaderSpaceReserve = styled.div`
    height: 85px;
    width: 100%;
`;

export const ScLoaderContainer = styled.div`
    width: 100%;
    height: calc(100vh - 135px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScErrorContainer = styled.div`
    width: 100%;
    height: calc(100vh - 135px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;

export const ScPaneHeaderLabel = styled.div`
    font-family: inter;
    font-weight: 700;
    color: black;
    font-size: 28px;
    line-height: 28px;
`;

export const ScFilterContainer = styled.div`
    padding: 27px 20px 25px 20px;
    border-bottom: 1px solid ${(props) => (props.$hideBorderBottom ? "#FFFFFF00" : "#dddddd")};
    width: 100%;
`;

export const ScFilterHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ScFilterHeaderLabel = styled.div`
    font-family: inter;
    font-eight: 700;
    color: black;
    font-size: 15px;
    line-height: 15px;
    margin-bottom: 26px;
`;

export const ScFilterOptionContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ScFilterOptionLabel = styled.span`
    font-family: inter;
    font-size: 12px;
    color: #222;
`;

export const ScFixedResetButton = styled.div`
    background-color: white;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 999;
    border-top: 1px solid #dddddd;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.2);
    color: black;
    cursor: pointer;
    font-size: 12px;
`;

export const ScResetButtonSpaceReserve = styled.div`
    height: 50px;
    width: 100%;
`;
