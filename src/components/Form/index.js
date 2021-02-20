import React from 'react';
import styled from 'styled-components';
import { useTable } from '../../hooks/useTable';
import { Formik, Form as FormikForm, Field as DefaultField } from 'formik';

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
        initialValues={Object.fromEntries(fields)}
    >
        {
            () => <StyledForm>
                {fields.map(([name, placeholder, type]) => {
                    if (Array.isArray(type)) {
                        return <Field key={name} as="select" name={name}>
                            {type.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                        </Field>;
                    } else {
                        return <Field key={name} name={name} placeholder={placeholder} type={type || 'text'} />;
                    }
                })}
                <SubmitButton type="submit">Submit</SubmitButton>
            </StyledForm>
        }
    </Formik>;
}

export default Form;