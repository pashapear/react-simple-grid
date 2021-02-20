import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { initialState } from './constants';

export const TableContext = createContext();
export const TableStateContext = createContext();

export const TableProvider = ({ children, config, data }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, config, data });

  return (
    <TableStateContext.Provider value={[state, dispatch]}>
      {children}
    </TableStateContext.Provider>
  );
};

TableProvider.propTypes = {
  children: PropTypes.node
};

TableProvider.defaultProps = {
  children: null
};
