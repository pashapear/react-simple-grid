import React from 'react';
import { Headers } from './Headers';
import { Rows } from './Rows';
import styled from 'styled-components';

const StyledTable = styled.table`
    border: 1px solid white;
    border-collapse: collapse;
`;

const Table = () => <StyledTable>
    <Headers />
    <Rows />
</StyledTable>;

export default Table;