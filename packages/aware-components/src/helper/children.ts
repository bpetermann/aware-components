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

export const getChildren = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getChildren)
    : isValidElement(element)
    ? element.type === Fragment
      ? React.Children.toArray(element.props.children).flatMap(getChildren)
      : [element]
    : [];
