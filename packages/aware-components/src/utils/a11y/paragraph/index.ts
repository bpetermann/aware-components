import React, { isValidElement } from 'react';
import {
  BOLD,
  EM,
  FONT,
  ITALIC,
  P,
  SPAN,
  STRONG,
  UNDERLINE,
} from '../../../constants';
import { messages } from '../../messages';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const getType = (node: React.ReactNode) => {
  return isValidElement(node) ? node.type.toString() : '';
};

const headingCheck = ({ children }: Props): string | null => {
  const childrenArray = React.Children.toArray(children);
  const type = getType(childrenArray[0]);

  return childrenArray.length === 1 &&
    [BOLD, ITALIC, UNDERLINE, STRONG, SPAN, FONT, EM].includes(type)
    ? `${messages.p.heading}<${type}>`
    : null;
};

export const paragraphChecks = (props: Props): string[] =>
  [headingCheck(props), checkColorContrast(props, P)].filter(
    (check) => check !== null
  );
