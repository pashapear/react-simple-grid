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

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 25%;
`;

const Table = () => {
    const [show, setShow] = useState(false);
    const [showJSON, setShowJSON] = useState(false);
    const [state, dispatch] = useTable();
    const { data } = state;

    return <>
        <StyledTable>
            <Headers />
            <Rows />
        </StyledTable>
        <Actions>
            <Button onClick={() => setShow(true)}>Add Data</Button>
            <Button onClick={() => setShowJSON(true)}>Display JSON</Button>
        </Actions>
        {
            show &&
            <Modal onClose={() => setShow(false)}>
                <Form onSubmit={values => {
                    dispatch(actions.addRow(values));
                    setShow(false);
                }} />
            </Modal>
        }
        {
            showJSON &&
            <Modal onClose={() => setShowJSON(false)}>
                <code>{JSON.stringify(data)}</code>
            </Modal>
        }
    </>;
};

export default Table;