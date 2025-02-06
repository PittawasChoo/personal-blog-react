import React from "react";

import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import Button from "components/Fields/Button";
import DatePicker from "components/Fields/DatePicker";
import PasswordField from "components/Fields/PasswordField";
import RadioGroup from "components/Fields/RadioGroup";
import SubmitErrorBox from "components/SubmitErrorBox";
import TextField from "components/Fields/TextField";

import { validationSchema } from "./validationSchema";
import {
    ScBody,
    ScDescription,
    ScFieldLabel,
    ScHeader,
    ScInputContainer,
    ScRadioGroupContainer,
    ScRequireMark,
    ScRoot,
} from "./styles";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const GENDER_OPTIONS = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
];

const Register = () => {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ["register"],
        mutationFn: async ({ email, password, firstName, lastName, dob, gender }) => {
            const response = await fetch(`${BACKEND_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    dateOfBirth: dob,
                    gender,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Register failed");
            }

            return await response.json();
        },
        onSuccess: (data) => {
            navigate("/register-success");
        },
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: null,
        gender: "",
    };

    const handleKeyDownForAlphabet = (e) => {
        if (e.key.length === 1 && !/[a-zA-Z\u0E00-\u0E7F\s.]/.test(e.key)) {
            e.preventDefault();
        }
    };

    return (
        <ScRoot>
            <ScBody>
                <ScHeader>CREATE ACCOUNT</ScHeader>
                <ScDescription>Please fill the following form:</ScDescription>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        mutate({
                            email: values.email,
                            password: values.password,
                            firstName: values.firstName,
                            lastName: values.lastName,
                            dob: values.dob,
                            gender: values.gender,
                        });
                    }}
                >
                    {(formProps) => (
                        <Form>
                            <ScFieldLabel>
                                First Name <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <TextField
                                    name="firstName"
                                    formProps={formProps}
                                    onKeyDown={handleKeyDownForAlphabet}
                                    inputProps={{
                                        inputMode: "text",
                                    }}
                                />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Last Name <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <TextField
                                    name="lastName"
                                    formProps={formProps}
                                    onKeyDown={handleKeyDownForAlphabet}
                                    inputProps={{
                                        inputMode: "text",
                                    }}
                                />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Email Address <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <TextField name="email" formProps={formProps} />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Password <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <PasswordField formProps={formProps} />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Date of Birth <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <DatePicker name="dob" formProps={formProps} disableFuture />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Gender <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <ScRadioGroupContainer>
                                    <RadioGroup
                                        row
                                        name="gender"
                                        formProps={formProps}
                                        options={GENDER_OPTIONS}
                                    />
                                </ScRadioGroupContainer>
                            </ScInputContainer>

                            {isError && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    style={{ marginBottom: "10px", maxWidth: "500px" }}
                                >
                                    <SubmitErrorBox>
                                        Unable to login: {error.message}
                                    </SubmitErrorBox>
                                </motion.div>
                            )}
                            <Button isLoading={isPending}>Register</Button>
                        </Form>
                    )}
                </Formik>
            </ScBody>
        </ScRoot>
    );
};

export default Register;
