import React from 'react';
import styled from 'styled-components';
import { useTable } from '../../hooks/useTable';

const StyledRow = styled.tr`
    height: 2em;
`;

export const Headers = () => {
    const [state] = useTable();
    const { config } = state;
    const { fields: headers } = config;

    return <thead>
        <StyledRow>{headers.map(([key, value]) => <Header key={key} header={value} />)}</StyledRow>
    </thead>;
};

const Header = ({ header }) => <th>{header}</th>;
