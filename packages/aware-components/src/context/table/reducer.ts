import { ADD_HEADER, DELETE_HEADER } from './actions';
import { TableAction, TableState } from './types';

export const initialState: TableState = {
  header: [],
};

export function tableReducer(
  state: TableState,
  action: TableAction
): TableState {
  switch (action.type) {
    case ADD_HEADER:
      return {
        ...state,
        header: [...state.header, ...(action.scope ? [action.scope] : [])],
      };
    case DELETE_HEADER:
      return {
        ...state,
        header: action.scope
          ? [
              ...state.header.slice(
                0,
                state.header.findIndex((scope) => scope === action.scope)
              ),
              ...state.header.slice(
                state.header.findIndex((scope) => scope === action.scope) + 1
              ),
            ]
          : state.header,
      };

    default:
      return state;
  }
}
