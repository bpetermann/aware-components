import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { Li } from '../components';
import { LI, OL, ROLE, UL } from '../constants';
import { messages } from '../utils/messages';

const LISTITEM = 'listitem';

type ValidElement =
  | React.ReactPortal
  | ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;

const hasListItemRole = (element: ValidElement) =>
  element.props[ROLE] === LISTITEM;

const isListItem = (element: ValidElement) =>
  element.type === LI.toLowerCase() || element.type === Li;

export const getNoneListItem = (
  children: ReactNode
): ReactElement | undefined =>
  Children.toArray(children).find(
    (child): child is ReactElement =>
      isValidElement(child) && !isListItem(child) && !hasListItemRole(child)
  );

export const getRoleListItem = (
  children: ReactNode
): ReactElement | undefined =>
  Children.toArray(children).find(
    (child): child is ReactElement =>
      isValidElement(child) && !isListItem(child) && hasListItemRole(child)
  );

export const formatWarning = (
  element:
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | undefined,
  type: typeof UL | typeof OL,
  msg: 'children' | 'role'
) =>
  element
    ? `${messages[type.toLowerCase() as 'ul' | 'ol'][msg]}"${element.type}"`
    : null;
