import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { Li } from '../components';
import { LI, OL, ROLE, UL } from '../constants';
import { messages } from '../utils/messages';

const LISTITEM = 'listitem';

const isList = (
  element:
    | React.ReactPortal
    | ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
) =>
  element.type === LI.toLowerCase() ||
  element.type === Li ||
  element.props[ROLE] === LISTITEM;

export const getNoneListItem = (
  children: ReactNode
): ReactElement | undefined =>
  Children.toArray(children).find(
    (child): child is ReactElement => isValidElement(child) && !isList(child)
  );

export const formatWarning = (
  element:
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | undefined,
  type: typeof UL | typeof OL
) =>
  element
    ? `${messages[type.toLowerCase() as 'ul' | 'ol'].children}"${element.type}"`
    : null;
