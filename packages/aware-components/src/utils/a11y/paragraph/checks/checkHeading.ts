import React, { isValidElement } from 'react';
import {
  BOLD,
  EM,
  FONT,
  ITALIC,
  SPAN,
  STRONG,
  UNDERLINE,
} from '../../../../constants';
import { messages } from '../../../messages';
import { ParagraphProps } from '../types';

const getType = (node: React.ReactNode) => {
  return isValidElement(node) ? node.type.toString() : '';
};

export const checkHeading = ({ children }: ParagraphProps): string | null => {
  const childrenArray = React.Children.toArray(children);
  const type = getType(childrenArray[0]);

  return childrenArray.length === 1 &&
    [BOLD, ITALIC, UNDERLINE, STRONG, SPAN, FONT, EM].includes(type)
    ? `${messages.p.heading}<${type}>`
    : null;
};
