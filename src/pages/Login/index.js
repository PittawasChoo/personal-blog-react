import React from "react";

import { Formik, Form } from "formik";
import { Link } from "react-router-dom";

import Button from "components/Fields/Button";
import PasswordField from "components/Fields/PasswordField";
import TextField from "components/Fields/TextField";

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
    const initialFormValues = {
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
                    initialValues={initialFormValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        // TODO: handle submit
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
                            <Button>LOG IN</Button>
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
