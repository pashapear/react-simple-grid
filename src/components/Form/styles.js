import styled from 'styled-components';
import { Form as FormikForm, Field as DefaultField } from 'formik';

export const StyledForm = styled(FormikForm)`
    display: flex;
    flex-direction: column;
`;

export const Field = styled(DefaultField)`
    padding: 0.5rem;
    margin: 0.5rem 0;
    min-width: 15rem;
`;

export const SubmitButton = styled.button`
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-weight: bold;
    cursor: pointer;
`;

export const Error = styled.div`
    font-size: 1em;
`;
