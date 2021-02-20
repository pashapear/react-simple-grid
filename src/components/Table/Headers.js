import React from 'react';
import { useTable } from '../../hooks/useTable';

export const Headers = () => {
    const [state] = useTable();
    const { config } = state;
    const { fields: headers } = config;

    return <thead>
        <tr>{headers.map(([key, value]) => <Header key={key} header={value} />)}</tr>
    </thead>;
};

const Header = ({ header }) => <th>{header}</th>;
