import React, {
  Fragment,
  ReactElement,
  ReactNode,
  isValidElement,
} from 'react';

const ignoreFragment = (element: ReactNode): ReactElement | null => {
  if (!isValidElement(element)) return null;

  if (element.type === Fragment) {
    const childArray = React.Children.toArray(element.props?.children || []);
    return ignoreFragment(childArray[0] || null);
  }

  return element;
};

const isElementOfType = (
  element: ReactNode,
  type: string
): element is ReactElement => {
  const el = ignoreFragment(element);
  return isValidElement(el) && el.type === type;
};

const getChild = (element: ReactElement): ReactElement | null => {
  const children = React.Children.toArray(element.props?.children || []);
  return ignoreFragment(children[0] || null);
};

export const getSequenceLength = (node: ReactNode, type: string): number => {
  let element: ReactElement | null = ignoreFragment(node);

  if (!isElementOfType(element, type)) return 0;

  let count = 0;

  while (isElementOfType(element, type)) {
    count++;
    element = getChild(element);
  }

  return count;
};
