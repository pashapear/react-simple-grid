import React, { useState } from 'react';
import styled from 'styled-components';
import { actions, useTable } from '../../hooks/useTable';
import { Headers } from './Headers';
import { Rows } from './Rows';
import Form from '../Form';
import { Modal } from '../../common/Modal';
import { Button } from '../../common/Button';

const StyledTable = styled.table`
    border: 1px solid white;
    border-collapse: collapse;
`;

const Table = () => {
    const [show, setShow] = useState(false);
    const [, dispatch] = useTable();

    return <>
        <StyledTable>
            <Headers />
            <Rows />
        </StyledTable>
        <Button onClick={() => setShow(true)}>Add Data</Button>
        {
            show &&
            <Modal onClose={() => setShow(false)}>
                <Form onSubmit={values => {
                    dispatch(actions.addRow(values));
                    setShow(false);
                }} />
            </Modal>
        }
    </>;
};

export default Table;