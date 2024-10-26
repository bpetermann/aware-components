import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { OPTGROUP } from '../../../../constants';
import { messages } from '../../../messages';
import { SelectProps } from '../types';

export const getChildren = (element: ReactNode): ReactElement[] => {
  if (!isValidElement(element)) return [];

  if (element.type === Fragment) {
    return React.Children.toArray(element.props.children).flatMap(getChildren);
  }

  return [element];
};

const getOptGroups = (props: SelectProps): ReactElement[] => {
  const children = getChildren(props.children);
  return children.filter(
    (child) => isValidElement(child) && child.type === OPTGROUP
  );
};

export const checkOptGroup = (props: SelectProps): string | null => {
  const hasAllLabels = getOptGroups(props).every((optGroup) =>
    Boolean(optGroup.props?.label)
  );
  return hasAllLabels ? null : messages.select.optgroup;
};
