import React from 'react';
import { useTable } from '../../hooks/useTable';

const Headers = () => {
    const [state] = useTable();
    const { config } = state;
    const { fields: headers } = config;
    return <thead>
        <tr>{headers.map(header => <Header key={header} header={header} />)}</tr>
    </thead>;
};

const Header = ({ header }) => {
    return <th>{header}</th>
};

const Rows = () => {
    const [state] = useTable();
    const { data: rows } = state;
    return <tbody>
        {rows.map(row => <Row key={row.part_number} row={row} />)}
    </tbody>
};

const Row = ({ row }) => {
    return <tr>
        {Object.values(row).map((data, index) => <td key={index}>{data}</td>
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