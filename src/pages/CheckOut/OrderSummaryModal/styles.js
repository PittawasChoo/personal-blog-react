import styled from "styled-components";

export const ScRoot = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    box-shadow: -5px 2px 18px -6px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    background-color: white;
    padding: 40px;
`;

export const ScSummaryHeader = styled.div`
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: 800;
`;

export const ScRecieptHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ScAddressHeader = styled.div`
    font-weight: 800;
    color: #ff4f00;
    font-size: 20px;
`;

export const ScRecieptDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ScRecieptDetailRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ScRecieptDetailHeader = styled.div`
    font-weight: 800;
    color: #ff4f00;
    margin-right: 15px;
`;

export const ScTableContainer = styled.div`
    display: grid;
    grid-template: 30px / 50px auto 100px 100px;
    background-color: #ff4f00;
    color: white;
    margin-top: 15px;
`;

export const ScQtyHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ScProductHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const ScUnitHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const ScAmountHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 5px;
`;

export const ScTableItemContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const ScQty = styled.div`
    width: 50px;
    text-align: center;
`;

export const ScProduct = styled.div`
    flex: 1;
`;

export const ScUnit = styled.div`
    width: 100px;
    text-align: right;
`;

export const ScAmount = styled.div`
    width: 100px;
    padding-right: 5px;
    text-align: right;
`;

export const ScTableUnderLine = styled.div`
    height: 2px;
    background-color: #ff4f00;
    margin-top: 10px;
`;

export const ScSummaryContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
`;

export const ScSummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
`;

export const ScSummaryBoxHeader = styled.div`
    margin-right: 30px;
`;

export const ScSummaryBoxValue = styled.div`
    width: 100px;
    padding-right: 5px;
    text-align: right;
`;

export const ScSummaryBoxTotalHeader = styled.div`
    margin-right: 30px;
    font-weight: 800;
`;

export const ScSummaryBoxLine = styled.div`
    height: 1px;
    background-color: #ff4f00;
    margin-top: 4px;
`;

export const ScSummaryBoxUnderLine = styled.div`
    height: 2px;
    background-color: #ff4f00;
    margin-top: 4px;
`;

export const ScButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
`;
