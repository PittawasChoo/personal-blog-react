import styled from "styled-components";

export const ScTableHeaderContainer = styled.div`
    display: grid;
    grid-template: 20px / 55% 10% 20% 15%;
    padding: 0 40px;
    margin-bottom: 15px;
    font-size: 12px;
    color: #555555;
`;

export const ScTableHeaderItems = styled.div`
    text-align: center;
`;

export const ScTableHeaderTotalPrice = styled.div`
    text-align: right;
`;

export const ScHistoryListContainer = styled.div`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.2);
`;

export const ScHistoryItemContainer = styled.div`
    display: grid;
    grid-template: 80px / 55% 10% 20% 15%;
    border-bottom: ${(props) => (props.$isLastItem ? "0px" : "1px solid #d7d7d7")};
    padding: 0 40px;
`;

export const ScHistoryDate = styled.div`
    display: flex;
    align-items: center;
`;

export const ScHistoryItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScHistoryTotalPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ScHistoryTotalView = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ScNotFullyLoadedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 150px;
`;
