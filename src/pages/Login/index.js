import React, { useContext } from "react";

import { Formik, Form } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";

import Button from "components/Fields/Button";
import PasswordField from "components/Fields/PasswordField";
import SubmitErrorBox from "components/SubmitErrorBox";
import TextField from "components/Fields/TextField";

import { AuthContext } from "contexts/AuthContext";

import { validationSchema } from "./validationSchema";
import {
    ScBody,
    ScCreateAccountLinkContainer,
    ScDescription,
    ScEmailFieldContainer,
    ScHeader,
    ScPasswordFieldContainer,
    ScRoot,
} from "./styles";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const { mutate, isPending, isError, error } = useMutation({
        mutationKey: ["login"],
        mutationFn: async ({ email, password }) => {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Login failed");
            }

            return await response.json();
        },
        onSuccess: (data) => {
            login(data.token);
            navigate(location.state?.redirectTo || "/");
        },
    });

    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <ScRoot>
            <ScBody>
                <ScHeader>LOGIN</ScHeader>
                <ScDescription>
                    Already have CyberWear online account? Just Sign-in with your existing email to
                    activate your membership.
                </ScDescription>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        mutate({ email: values.email, password: values.password });
                    }}
                >
                    {(formProps) => (
                        <Form>
                            <ScEmailFieldContainer>
                                <TextField label="Email" name="email" formProps={formProps} />
                            </ScEmailFieldContainer>
                            <ScPasswordFieldContainer>
                                <PasswordField label="Password" formProps={formProps} />
                            </ScPasswordFieldContainer>
                            {isError && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    style={{ marginBottom: "10px" }}
                                >
                                    <SubmitErrorBox>
                                        Unable to login: {error.message}
                                    </SubmitErrorBox>
                                </motion.div>
                            )}
                            <Button isLoading={isPending}>LOG IN</Button>
                        </Form>
                    )}
                </Formik>

                <ScCreateAccountLinkContainer>
                    New customer?{" "}
                    <Link to="/register" style={{ color: "inherit" }}>
                        Create an account
                    </Link>
                </ScCreateAccountLinkContainer>
            </ScBody>
        </ScRoot>
    );
};

export default Login;
