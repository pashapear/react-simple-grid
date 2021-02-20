import { useContext } from 'react';

import {
    TableStateContext,
    TableProvider
} from './context';

import actions from './actions';

const useTableState = () => {
    const context = useContext(TableStateContext);

    if (context === undefined) {
        throw new Error('useTableState must be used within a TableStateContext');
    }

    return context;
};

export { useTableState, TableProvider, actions };
