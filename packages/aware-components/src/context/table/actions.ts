import { useContext } from 'react';
import { TableContext } from './context';
import { Scope } from './types';

export const ADD_HEADER = 'ADD_HEADER';
export const DELETE_HEADER = 'DELETE_HEADER';
export const ADD_CAPTION = 'ADD_CAPTION';
export const DELETE_CAPTION = 'DELETE_CAPTION';

export const addHeader = (scope?: Scope) => ({ type: ADD_HEADER, scope });
export const deleteHeader = (scope?: Scope) => ({ type: DELETE_HEADER, scope });
export const addCaption = () => ({ type: ADD_CAPTION });
export const deleteCaption = () => ({ type: DELETE_CAPTION });

export const useTable = () => useContext(TableContext);
