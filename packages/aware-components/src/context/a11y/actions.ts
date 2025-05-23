import { useContext } from 'react';
import { AccessibilityContext } from './context';
import { Heading } from './types';

export const ADD_SECTION = 'ADD_SECTION';
export const DELETE_SECTION = 'DELETE_SECTION';
export const ADD_NAV = 'ADD_NAV';
export const DELETE_NAV = 'DELETE_NAV';
export const ADD_HEADING = 'ADD_HEADING';
export const DELETE_HEADING = 'DELETE_HEADING';
export const ADD_MAIN = 'ADD_MAIN';
export const DELETE_MAIN = 'DELETE_MAIN';
export const ADD_LINK = 'ADD_LINK';
export const DELETE_LINK = 'DELETE_LINK';
export const ADD_LABEL = 'ADD_LABEL';
export const DELETE_LABEL = 'DELETE_LABEL';
export const ADD_HR = 'ADD_HR';
export const DELETE_HR = 'DELETE_HR';

export const addSection = () => ({ type: ADD_SECTION });
export const deleteSection = () => ({ type: DELETE_SECTION });
export const addNav = () => ({ type: ADD_NAV });
export const deleteNav = () => ({ type: DELETE_NAV });
export const addHeading = (tag: Heading) => ({ type: ADD_HEADING, tag });
export const deleteHeading = (tag: Heading) => ({ type: DELETE_HEADING, tag });
export const addMain = () => ({ type: ADD_MAIN });
export const deleteMain = () => ({ type: DELETE_MAIN });
export const addLink = (href?: string) => ({ type: ADD_LINK, href });
export const deleteLink = (href?: string) => ({ type: DELETE_LINK, href });
export const addLabel = (htmlFor: string) => ({ type: ADD_LABEL, htmlFor });
export const deleteLabel = (htmlFor: string) => ({
  type: DELETE_LABEL,
  htmlFor,
});
export const addHr = () => ({ type: ADD_HR });
export const deleteHr = () => ({ type: DELETE_HR });

export const useAccessibility = () => useContext(AccessibilityContext);
