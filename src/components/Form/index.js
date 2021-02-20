import React from 'react';
import { useTable } from '../../hooks/useTable';
import { Formik, ErrorMessage } from 'formik';
import { StyledForm, Field, Error, SubmitButton } from './styles';

const Form = ({ onSubmit, values }) => {
    const [state] = useTable();
    const { config } = state;
    const { fields, validationSchema } = config;

    return <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={values || Object.fromEntries(fields.map(([key]) => [key, '']))}
    >
        {
            () => <StyledForm>
                {fields.map(([name, placeholder, type]) =>
                    <React.Fragment key={name}>
                        <label htmlFor={name}>{placeholder}</label>
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