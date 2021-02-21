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
    margin-top: 1rem; 
`;

const InputWrapper = styled.div`
    display: inline;
    margin-bottom: 1rem;
    & label {
        margin-right: 0.5rem;   
    }
`;

const Table = () => {
    const [show, setShow] = useState(false);
    const [showJSON, setShowJSON] = useState(false);
    const [state, dispatch] = useTable();
    const { data, config } = state;
    const [rows, setRows] = useState(data);
    const { title } = config;

    return <>
        <h1>{title}</h1>
        <InputWrapper>
            <label htmlFor="search">Search: </label>
            <input
                name="search"
                onChange={e => setRows(data.filter(item =>
                    Object.values(item).join(' ').toLowerCase().includes(e.currentTarget.value.toLowerCase())))
                }
            />
        </InputWrapper>
        <StyledTable>
            <Headers />
            <Rows rows={rows} />
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