import React, {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';
import { A, Button, Input, Select, Textarea } from '../components';
import { INERT } from '../constants';
import { inertValue } from './inertValue';

const TABINDEX = 'tabIndex';
const CONTENT_EDITABLE = 'contentEditable';
const ROLE = 'role';
const DISABLED = 'disabled';
const HREF = 'href';

const FORM_ELEMENTS = ['input', 'button', 'textarea', 'select'];

const getChildElements = (node: ReactNode): ReactElement[] => {
  if (!isValidElement(node)) return [];

  const childArray = Children.toArray(node.props?.children) || [];

  return childArray.flatMap((child) => {
    if (isValidElement(child)) {
      if (child.type === React.Fragment) {
        return getChildElements(child);
      }
      return [child, ...getChildElements(child)];
    }
    return [];
  });
};

export const canHaveAriaHidden = (node: ReactNode): boolean => {
  if (!isValidElement(node) || !isNotFocusable(node)) {
    return false;
  }

  const childElements = getChildElements(node);

  return childElements.every((child) => canHaveAriaHidden(child));
};

const isFormControl = (element: React.ReactElement) =>
  (typeof element.type === 'string' && FORM_ELEMENTS.includes(element.type)) ||
  [Input, Button, Select, Textarea].some((type) => element.type === type);

const isNotFocusable = (element: React.ReactElement): boolean => {
  const isFormElement = isFormControl(element);
  const isLink = element.type === 'a' || element.type === A;

  const getAttributeValue = (name: string): string | boolean | undefined => {
    return element.props?.[name] ? element.props[name] : undefined;
  };

  const hasTabIndex = getAttributeValue(TABINDEX);
  const tabIndexValue = hasTabIndex !== undefined ? +hasTabIndex : null;
  const hasNegativeTabIndex = tabIndexValue === -1;
  const hasPositiveTabIndex = tabIndexValue !== null && tabIndexValue > -1;

  const hasInert = element.props?.[INERT] === inertValue;
  const hasContentEditable = getAttributeValue(CONTENT_EDITABLE) === true;
  const hasButtonRole = getAttributeValue(ROLE) === 'button';
  const hasHref = getAttributeValue(HREF) !== undefined;
  const isDisabled = getAttributeValue(DISABLED) !== undefined;

  return !(
    (isFormElement && !hasNegativeTabIndex && !isDisabled && !hasInert) ||
    (isLink && hasHref && !hasInert) ||
    hasContentEditable ||
    hasPositiveTabIndex ||
    (hasButtonRole && !hasNegativeTabIndex)
  );
};
