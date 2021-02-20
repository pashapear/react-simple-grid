import React from 'react';
import styled from 'styled-components';
import { useTable } from '../../hooks/useTable';
import { Formik, Form as FormikForm, Field as DefaultField, ErrorMessage } from 'formik';

const StyledForm = styled(FormikForm)`
    display: flex;
    flex-direction: column;
`;

const Field = styled(DefaultField)`
    padding: 0.5rem;
    margin: 0.5rem 0;
    min-width: 15rem;
`;

const SubmitButton = styled.button`
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-weight: bold;
`;

const Error = styled.div`
    font-size: 1em;
`;

const Form = () => {
    const [state] = useTable();
    const { config } = state;
    const { fields, validationSchema } = config;

    return <Formik
        validationSchema={validationSchema}
        onSubmit={values => {
            console.log(values);
        }}
        initialValues={Object.fromEntries(fields.map(([key]) => [key, '']))}
    >
        {
            () => <StyledForm>
                {fields.map(([name, placeholder, type]) =>
                    <React.Fragment key={name}>
                        {
                            Array.isArray(type) ?
                                <Field component="select" name={name}>
                                    <option key="default" defaultValue>{`Select ${placeholder}`}</option>
                                    {type.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                                </Field>
                                :
                                <Field name={name} placeholder={placeholder} type={type || 'text'} />
                        }
                        <ErrorMessage name={name} component={Error} />
                    </React.Fragment>
                )}
                <SubmitButton key="submit" type="submit">Submit</SubmitButton>
            </StyledForm>
        }
    </Formik>;
}

export default Form;