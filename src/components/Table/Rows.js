import React, { useState } from 'react';
import { actions, useTable } from '../../hooks/useTable';
import Form from '../Form';
import { Modal } from '../../common/Modal';

export const Rows = () => {
    const [state, dispatch] = useTable();

    const { data: rows, config } = state;
    const { idKey } = config;

    return <tbody>
        {rows.map(row =>
            <Row
                key={row[idKey]}
                row={row}
                onSubmit={values => dispatch(actions.editRow(values))}
            />
        )}
    </tbody>;
};

const Row = ({ row, onSubmit }) => {
    const [show, setShow] = useState(false);

    return <>
        <tr onClick={() => setShow(true)}>
            {Object.values(row).map((data, index) => <td key={index}>{data}</td>)}
        </tr>
        {show && <Modal onClose={() => setShow(false)}><Form onSubmit={(values) => {
            setShow(false);
            onSubmit(values);
        }} values={row} /></Modal>}
    </>;
};

