import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';
import { initialState } from './constants';

export const TableContext = createContext();
export const TableStateContext = createContext();

export const TableProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
