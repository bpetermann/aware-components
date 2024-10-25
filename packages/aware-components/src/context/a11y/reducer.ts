import {
  ADD_HEADING,
  ADD_LABEL,
  ADD_LINK,
  ADD_MAIN,
  ADD_NAV,
  ADD_SECTION,
  DELETE_HEADING,
  DELETE_LABEL,
  DELETE_LINK,
  DELETE_MAIN,
  DELETE_NAV,
  DELETE_SECTION,
} from './actions';
import { A11yAction, A11yState } from './types';

export const initialState: A11yState = {
  headings: [],
  links: [],
  labels: [],
  sections: 0,
  navigations: 0,
  mainAmount: 0,
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
      return {
        ...state,
        headings: [
          ...state.headings,
          ...(action.tag &&
          (!state.headings.includes(action.tag) || action.tag === 'h1')
            ? [action.tag]
            : []),
        ],
      };
    case DELETE_HEADING:
      return {
        ...state,
        headings: state.headings.filter((tag) => tag !== action.tag),
      };
    case ADD_MAIN:
      return { ...state, mainAmount: state.mainAmount + 1 };
    case DELETE_MAIN:
      return { ...state, mainAmount: state.mainAmount - 1 };
    case ADD_LINK:
      return {
        ...state,
        links: [
          ...state.links,
          ...(action.href && !state.links.includes(action.href)
            ? [action.href]
            : []),
        ],
      };
    case DELETE_LINK:
      return {
        ...state,
        links: state.links.filter((href) => href !== action.href),
      };
    case ADD_LABEL:
      return {
        ...state,
        labels: [
          ...state.labels,
          ...(action.htmlFor && !state.labels.includes(action.htmlFor)
            ? [action.htmlFor]
            : []),
        ],
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((label) => label !== action.htmlFor),
      };
    default:
      return state;
  }
}
