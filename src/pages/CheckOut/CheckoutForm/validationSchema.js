import * as Yup from "yup";

export const validationSchema = Yup.object({
    // customer information
    firstName: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    lastName: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    email: Yup.string().email("Please enter a valid email address").required("Required"),
    phoneNumber: Yup.string()
        .required("Required")
        .matches(/^[0-9]{10}$/, "Please enter a valid phone number"),

    // shipping address
    address: Yup.string().required("Required"),
    address2: Yup.string(),
    province: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    postalCode: Yup.string()
        .required("Required")
        .matches(/^[0-9]{5}$/, "Please enter a valid postal code"),

    // payment information
    cardholder: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    cardNumber: Yup.string()
        .required("Required")
        .matches(/^[0-9]{16}$/, "Please enter a valid credit card number"),
    expDate: Yup.string().required("Required"),
    cvv: Yup.string()
        .required("Required")
        .matches(/^[0-9]{3}$/, "Please enter a valid CVV"),
});
