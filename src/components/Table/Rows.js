import React from 'react';
import { useTable } from '../../hooks/useTable';

export const Rows = () => {
    const [state] = useTable();
    const { data: rows } = state;

    return <tbody>
        {rows.map(row => <Row key={row.part_number} row={row} />)}
    </tbody>;
};

const Row = ({ row }) => <tr>{Object.values(row).map((data, index) => <td key={index}>{data}</td>)}</tr>;
