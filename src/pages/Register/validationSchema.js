import * as Yup from "yup";

export const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
});
