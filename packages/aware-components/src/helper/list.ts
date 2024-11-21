import { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { Li } from '../components';
import { LI } from '../constants';

export const getNoneListItem = (
  children: ReactNode
): ReactElement | undefined =>
  Children.toArray(children).find(
    (child): child is ReactElement =>
      isValidElement(child) && child.type !== LI && child.type !== Li
  );
