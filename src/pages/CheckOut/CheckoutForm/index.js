import React, { useState } from "react";
import PropTypes from "prop-types";

import { Formik, Form } from "formik";

import CustomerInformation from "./CustomerInformation";
import PaymentInformation from "./PaymentInformation";
import ShippingAddress from "./ShippingAddress";

import { validationSchema } from "./validationSchema";

const CheckoutForm = ({ userData, setOrderSummary, setIsModalOpen }) => {
    const [expandingPanel, setExpanded] = useState("panel1");

    const handleChange = (panel) => {
        setExpanded(panel === expandingPanel ? "none" : panel);
    };

    const initialValues = {
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        email: userData.email || "",
        phoneNumber: "",
        address: "",
        address2: "",
        province: "",
        postalCode: "",
        cardholder: "",
        cardNumber: "",
        expDate: null,
        cvv: "",
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                setOrderSummary(values);
                setIsModalOpen(true);
            }}
        >
            {(formProps) => (
                <Form>
                    <CustomerInformation
                        name="panel1"
                        expandingPanel={expandingPanel}
                        handleChange={handleChange}
                        formProps={formProps}
                    />
                    <ShippingAddress
                        name="panel2"
                        expandingPanel={expandingPanel}
                        handleChange={handleChange}
                        formProps={formProps}
                    />
                    <PaymentInformation
                        name="panel3"
                        expandingPanel={expandingPanel}
                        handleChange={handleChange}
                        formProps={formProps}
                    />
                </Form>
            )}
        </Formik>
    );
};

CheckoutForm.propTypes = {
    userData: PropTypes.object.isRequired,
    setOrderSummary: PropTypes.func.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
};

export default CheckoutForm;
