import styled from 'styled-components';

export const StyledTable = styled.table`
    border: 1px solid white;
    border-collapse: collapse;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 25%;
    margin-top: 1rem; 
`;

export const InputWrapper = styled.div`
    display: inline;
    margin-bottom: 1rem;
    & label {
        margin-right: 0.5rem;   
    }
`;
