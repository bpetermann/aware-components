import React, { useReducer } from 'react';
import { TableContext } from './context';
import { initialState, tableReducer } from './reducer';

const TableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  return (
    <TableContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
