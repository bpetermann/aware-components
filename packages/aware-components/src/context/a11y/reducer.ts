import {
  ADD_HEADING,
  ADD_HR,
  ADD_LABEL,
  ADD_LINK,
  ADD_MAIN,
  ADD_NAV,
  ADD_SECTION,
  DELETE_HEADING,
  DELETE_HR,
  DELETE_LABEL,
  DELETE_LINK,
  DELETE_MAIN,
  DELETE_NAV,
  DELETE_SECTION,
} from './actions';
import { A11yAction, A11yState } from './types';

const removeOne = <T>(arr: T[], value: T): T[] => {
  const index = arr.indexOf(value);
  return index === -1
    ? arr
    : [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const initialState: A11yState = {
  headings: [],
  links: [],
  labels: [],
  sections: 0,
  navigations: 0,
  mainAmount: 0,
  hrAmount: 0,
};

export function a11yReducer(state: A11yState, action: A11yAction): A11yState {
  switch (action.type) {
    case ADD_SECTION:
      return { ...state, sections: state.sections + 1 };
    case DELETE_SECTION:
      return { ...state, sections: state.sections - 1 };
    case ADD_NAV:
      return { ...state, navigations: state.navigations + 1 };
    case DELETE_NAV:
      return { ...state, navigations: state.navigations - 1 };
    case ADD_HEADING:
      return action.tag
        ? { ...state, headings: [...state.headings, action.tag] }
        : state;
    case DELETE_HEADING:
      return action.tag
        ? { ...state, headings: removeOne(state.headings, action.tag) }
        : state;
    case ADD_MAIN:
      return { ...state, mainAmount: state.mainAmount + 1 };
    case DELETE_MAIN:
      return { ...state, mainAmount: state.mainAmount - 1 };
    case ADD_LINK:
      return action.href
        ? { ...state, links: [...state.links, action.href] }
        : state;
    case DELETE_LINK:
      return action.href
        ? { ...state, links: removeOne(state.links, action.href) }
        : state;
    case ADD_LABEL:
      return action.htmlFor
        ? { ...state, labels: [...state.labels, action.htmlFor] }
        : state;
    case DELETE_LABEL:
      return action.htmlFor
        ? { ...state, labels: removeOne(state.labels, action.htmlFor) }
        : state;
    case ADD_HR:
      return { ...state, hrAmount: state.hrAmount + 1 };
    case DELETE_HR:
      return { ...state, hrAmount: state.hrAmount - 1 };
    default:
      return state;
  }
}
