import React, {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

const TABINDEX = 'tabIndex';
const CONTENT_EDITABLE = 'contentEditable';
const ROLE = 'role';
const DISABLED = 'disabled';
const HREF = 'href';

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

const isNotFocusable = (element: React.ReactElement): boolean => {
  const formElements: string[] = ['input', 'button', 'textarea', 'select'];
  const isFormControl =
    typeof element.type === 'string' && formElements.includes(element.type);

  const isLink = typeof element.type === 'string' && element.type === 'a';

  const getAttributeValue = (name: string): string | boolean | undefined => {
    return element.props?.[name] ? element.props[name] : undefined;
  };

  const hasTabIndex = getAttributeValue(TABINDEX);
  const tabIndexValue = hasTabIndex !== undefined ? +hasTabIndex : null;
  const hasNegativeTabIndex = tabIndexValue === -1;
  const hasPositiveTabIndex = tabIndexValue !== null && tabIndexValue > -1;

  const hasInert = getAttributeValue('inert') !== undefined;
  const hasContentEditable = getAttributeValue(CONTENT_EDITABLE) === true;
  const hasButtonRole = getAttributeValue(ROLE) === 'button';
  const hasHref = getAttributeValue(HREF) !== undefined;
  const isDisabled = getAttributeValue(DISABLED) !== undefined;

  return !(
    (isFormControl && !hasNegativeTabIndex && !isDisabled && !hasInert) ||
    (isLink && hasHref && !hasInert) ||
    hasContentEditable ||
    hasPositiveTabIndex ||
    (hasButtonRole && !hasNegativeTabIndex)
  );
};
