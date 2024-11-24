import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { Li } from '../components';
import { LI } from '../constants';
import { messages } from '../utils/messages';

export const getNoneListItem = (
  children: ReactNode
): ReactElement | undefined =>
  Children.toArray(children).find(
    (child): child is ReactElement =>
      isValidElement(child) &&
      child.type !== LI.toLowerCase() &&
      child.type !== Li
  );

export const formatWarning = (
  el:
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | undefined
) => (el ? `${messages.ul.children}"${el.type}"` : null);
