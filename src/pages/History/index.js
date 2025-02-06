import React, { useState } from "react";

import HistoryList from "./HistoryList";
import OrderSummaryModal from "./OrderSummaryModal";
import { ScBody, ScHeader, ScRoot } from "./styles";

const History = () => {
    const [modal, setModal] = useState({ showModal: false });

    return (
        <ScRoot>
            <OrderSummaryModal
                isModalOpen={modal.showModal}
                shippingInfo={modal.shippingDetail}
                products={modal.products}
                onClose={() => setModal({ showModal: false })}
                totalPrice={modal.totalPrice}
                date={modal.date}
            />

            <ScBody>
                <ScHeader>ORDER HISTORY</ScHeader>

                <HistoryList setModal={setModal} />
            </ScBody>
        </ScRoot>
    );
};

export default History;
