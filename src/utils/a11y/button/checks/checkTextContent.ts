import React from 'react';
import { ARIA_LABEL, ARIA_LABELLEDBY, TITLE } from '../../../../constants';
import {
  containsImageElement,
  containsTextChild,
} from '../../../../helper/validation';
import { messages } from '../../../messages';
import { ButtonProps } from '../types/buttonProps';

const containsValidArrayChildren = (children?: React.ReactNode): boolean =>
  Array.isArray(children) &&
  children.some(
    (child) =>
      containsTextChild(child) ||
      (React.isValidElement(child) && containsTextualContent(child))
  );

const isValidElementChild = (children: React.ReactNode): boolean =>
  React.isValidElement(children) && containsAccessibleText(children.props);

const containsFragmentWithText = (children: React.ReactNode): boolean =>
  React.isValidElement(children) &&
  children.type === React.Fragment &&
  containsTextualContent(children.props.children);

const containsTextualContent = (children?: React.ReactNode): boolean =>
  containsTextChild(children) ||
  containsValidArrayChildren(children) ||
  isValidElementChild(children) ||
  containsFragmentWithText(children);

const hasAccessibleLabel = (props: ButtonProps): boolean =>
  (ARIA_LABEL in props && !!props[ARIA_LABEL]) ||
  (ARIA_LABELLEDBY in props && !!props[ARIA_LABELLEDBY]) ||
  (TITLE in props && !!props[TITLE]);

export const containsAccessibleText = (props: ButtonProps): boolean =>
  hasAccessibleLabel(props) ||
  containsImageElement(props.children) ||
  containsTextualContent(props.children);

export const checkTextContext = (props: ButtonProps): string | null =>
  !containsAccessibleText(props) ? messages.button.text : null;
