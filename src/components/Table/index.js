import React from 'react';
import { useTable } from '../../hooks/useTable';

const Headers = () => {
    const [state] = useTable();
    const { config } = state;
    const { fields: headers } = config;
    return <thead>
        <tr>{headers.map(header => <Header header={header} />)}</tr>
    </thead>;
};

const Header = ({ header }) => {
    return <th>{header}</th>
};

const Rows = () => {
    const [state] = useTable();
    const { data: rows } = state;
    return <tbody>
        {rows.map(row => <Row row={row} />)}
    </tbody>
};

const Row = ({ row }) => {
    return <tr>
        {Object.values(row).map(data => <td>{data}</td>
        )}
    </tr>
};

const Table = () => {
    return <table>
        <Headers />
        <Rows />
    </table>
}

export default Table;