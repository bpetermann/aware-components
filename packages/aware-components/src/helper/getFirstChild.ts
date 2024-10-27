import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Fragment } from 'react/jsx-runtime';

export const getFirstChild = (element: ReactNode): ReactElement | null => {
  if (!isValidElement(element)) return null;

  if (element.type === Fragment) {
    const childArray = React.Children.toArray(element.props?.children);
    if (childArray.length === 0) return null;
    return getFirstChild(childArray[0]);
  }

  return element;
};
