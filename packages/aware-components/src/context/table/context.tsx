import { createContext } from 'react';
import { TableContextType } from './types';

export const TableContext = createContext<TableContextType>({
  header: [],
  caption: undefined,
  dispatch: () => null,
});
