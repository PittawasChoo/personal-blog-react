import React from "react";
import PropTypes from "prop-types";

import dayjs from "dayjs";
import Modal from "@mui/material/Modal";

import { formatToLocaleString } from "modules/number/formatToLocaleString";

import {
    ScAddressHeader,
    ScAmount,
    ScAmountHeader,
    ScProduct,
    ScProductHeader,
    ScQty,
    ScQtyHeader,
    ScRecieptDetailContainer,
    ScRecieptDetailHeader,
    ScRecieptDetailRow,
    ScRecieptHeader,
    ScRoot,
    ScSummaryBoxHeader,
    ScSummaryBoxLine,
    ScSummaryBoxTotalHeader,
    ScSummaryBoxUnderLine,
    ScSummaryBoxValue,
    ScSummaryContainer,
    ScSummaryHeader,
    ScSummaryRow,
    ScTableContainer,
    ScTableItemContainer,
    ScTableUnderLine,
    ScUnit,
    ScUnitHeader,
} from "./styles";

const OrderSummaryModal = ({
    isModalOpen,
    shippingInfo = {},
    products = [],
    onClose = () => {},
    totalPrice = 0,
    date = "",
}) => {
    return (
        <Modal open={isModalOpen} onClose={onClose}>
            <ScRoot>
                <ScSummaryHeader>ORDER SUMMARY</ScSummaryHeader>
                <ScRecieptHeader>
                    <div>
                        <ScAddressHeader>Ship To</ScAddressHeader>
                        <div>
                            {shippingInfo.firstName} {shippingInfo.lastName}
                        </div>
                        <div>{shippingInfo.address}</div>
                        {shippingInfo.address2 && <div>{shippingInfo.address2}</div>}
                        <div>
                            {shippingInfo.province}, {shippingInfo.postalCode}
                        </div>
                    </div>

                    <ScRecieptDetailContainer>
                        <ScRecieptDetailRow>
                            <ScRecieptDetailHeader>Reciept Date</ScRecieptDetailHeader>
                            <div>{dayjs(date).format("DD MMMM YYYY")}</div>
                        </ScRecieptDetailRow>
                    </ScRecieptDetailContainer>
                </ScRecieptHeader>
                <ScTableContainer>
                    <ScQtyHeader>Qty</ScQtyHeader>
                    <ScProductHeader>Product</ScProductHeader>
                    <ScUnitHeader>Unit Price</ScUnitHeader>
                    <ScAmountHeader>Amount</ScAmountHeader>
                </ScTableContainer>
                <>
                    <div>
                        {products.map((product) => {
                            const productPrice = product.promotionPrice || product.price;
                            return (
                                <ScTableItemContainer>
                                    <ScQty>{product.quantity}</ScQty>
                                    <ScProduct>{product.name}</ScProduct>
                                    <ScUnit>$ {formatToLocaleString(Number(productPrice))}</ScUnit>
                                    <ScAmount>
                                        ${" "}
                                        {formatToLocaleString(
                                            Number(productPrice * product.quantity)
                                        )}
                                    </ScAmount>
                                </ScTableItemContainer>
                            );
                        })}
                    </div>
                    <ScTableUnderLine />
                    <ScSummaryContainer>
                        <div>
                            <ScSummaryRow>
                                <ScSummaryBoxHeader>Subtotal</ScSummaryBoxHeader>
                                <ScSummaryBoxValue>
                                    $ {formatToLocaleString(Number(totalPrice))}
                                </ScSummaryBoxValue>
                            </ScSummaryRow>
                            <ScSummaryRow>
                                <ScSummaryBoxHeader>Delivery Fee</ScSummaryBoxHeader>
                                <ScSummaryBoxValue>Free</ScSummaryBoxValue>
                            </ScSummaryRow>
                            <ScSummaryBoxLine />
                            <ScSummaryRow>
                                <ScSummaryBoxTotalHeader>Total</ScSummaryBoxTotalHeader>
                                <ScSummaryBoxValue>
                                    $ {formatToLocaleString(Number(totalPrice))}
                                </ScSummaryBoxValue>
                            </ScSummaryRow>
                            <ScSummaryBoxUnderLine />
                        </div>
                    </ScSummaryContainer>
                </>
            </ScRoot>
        </Modal>
    );
};

OrderSummaryModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    shippingInfo: PropTypes.object,
    products: PropTypes.array,
    onClose: PropTypes.func,
    totalPrice: PropTypes.number,
    date: PropTypes.string,
};

export default OrderSummaryModal;
