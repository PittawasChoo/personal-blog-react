import React from "react";

import { toast } from "react-toastify";

import AddToCartSuccess from "components/Toast/AddToCartSuccess";

const useToast = () => {
    const notifySuccess = (content) => toast.success(content || "Success");
    const notifyError = (content) => toast.error(content || "Error");
    const notifyAddToCartSuccess = (addedProduct, productsCount) =>
        toast.success(
            ({ closeToast }) => {
                return (
                    <AddToCartSuccess
                        onClose={closeToast}
                        addedProduct={addedProduct}
                        productsCount={productsCount}
                    />
                );
            },
            {
                icon: false,
            }
        );

    return { notifySuccess, notifyError, notifyAddToCartSuccess };
};

export default useToast;
