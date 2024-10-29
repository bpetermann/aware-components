import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { OPTGROUP } from '../../../../constants';
import { messages } from '../../../messages';
import { SelectProps } from '../types';

export const getChildren = (element: ReactNode): ReactElement[] =>
  !isValidElement(element)
    ? []
    : element.type === Fragment
    ? React.Children.toArray(element.props.children).flatMap(getChildren)
    : [element];

const getOptGroups = (props: SelectProps): ReactElement[] =>
  getChildren(props.children)?.filter(
    (child) => isValidElement(child) && child.type === OPTGROUP
  );

export const checkOptGroup = (props: SelectProps): string | null =>
  getOptGroups(props).every((optGroup) => Boolean(optGroup.props?.label))
    ? null
    : messages.select.optgroup;
