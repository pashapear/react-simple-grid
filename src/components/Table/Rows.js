import React, { useState } from 'react';
import styled from 'styled-components';
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

const StyledRow = styled.tr`
    height: 2em;
    cursor: pointer;
    :hover {
        border: 1px solid white;
        border-collapse: collapse;
    }
`;

const StyledCell = styled.td`
    padding: 0 10px;
`;


const Row = ({ row, onSubmit }) => {
    const [show, setShow] = useState(false);

    return <>
        <StyledRow onClick={() => setShow(true)}>
            {Object.values(row).map((data, index) => <StyledCell key={index}>{data}</StyledCell>)}
        </StyledRow>
        {show && <Modal onClose={() => setShow(false)}><Form onSubmit={(values) => {
            setShow(false);
            onSubmit(values);
        }} values={row} /></Modal>}
    </>;
};

