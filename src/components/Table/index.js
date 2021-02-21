import React, { useEffect, useState } from 'react';
import { actions, useTable } from '../../hooks/useTable';
import { Headers } from './Headers';
import { Rows } from './Rows';
import Form from '../Form';
import { Modal } from '../../common/Modal';
import { Button } from '../../common/Button';
import { InputWrapper, StyledTable, Actions } from './styles';

const Table = () => {
    const [show, setShow] = useState(false);
    const [showJSON, setShowJSON] = useState(false);
    const [state, dispatch] = useTable();
    const { data, config } = state;
    const [rows, setRows] = useState(data);
    const { title } = config;

    useEffect(() => {
        setRows(data);
    }, [data]);

    return <>
        <h1>{title}</h1>
        <InputWrapper>
            <label htmlFor="search">Search: </label>
            <input
                type="search"
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
        <h4>Click rows to edit</h4>
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