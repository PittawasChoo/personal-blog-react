import * as Yup from "yup";

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    lastName: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z\u0E00-\u0E7F\s.]/, "Only letters, spaces, and dots are allowed."),
    email: Yup.string()
        .required("Required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
});
