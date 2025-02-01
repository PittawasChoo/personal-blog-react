import React from "react";

import { Formik, Form } from "formik";

import Button from "components/Fields/Button";
import DatePicker from "components/Fields/DatePicker";
import PasswordField from "components/Fields/PasswordField";
import RadioGroup from "components/Fields/RadioGroup";
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

const GENDER_OPTIONS = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
];

const Register = () => {
    const initialFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: null,
        gender: "",
    };

    return (
        <ScRoot>
            <ScBody>
                <ScHeader>CREATE ACCOUNT</ScHeader>
                <ScDescription>Please fill the following form:</ScDescription>
                <Formik
                    initialValues={initialFormValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        // TODO: handle submit
                    }}
                >
                    {(formProps) => (
                        <Form>
                            <ScFieldLabel>
                                First Name <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <TextField name="firstName" formProps={formProps} />
                            </ScInputContainer>

                            <ScFieldLabel>
                                Last Name <ScRequireMark>*</ScRequireMark>
                            </ScFieldLabel>
                            <ScInputContainer>
                                <TextField name="lastName" formProps={formProps} />
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
                                <DatePicker name="dob" formProps={formProps} />
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

                            <Button type="submit">Register</Button>
                        </Form>
                    )}
                </Formik>
            </ScBody>
        </ScRoot>
    );
};

export default Register;
