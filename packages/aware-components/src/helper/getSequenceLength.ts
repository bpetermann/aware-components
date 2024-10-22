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

const isElementOfType = <T>(
  element: ReactNode,
  types: Iterable<T>
): element is ReactElement => {
  const el = ignoreFragment(element);
  return (
    isValidElement(el) && Array.from(types).some((type) => el.type === type)
  );
};

const getChild = (element: ReactElement): ReactElement | null => {
  const children = React.Children.toArray(element.props?.children || []);
  return ignoreFragment(children[0] || null);
};

export const getSequenceLength = <T>(
  node: ReactNode,
  types: Iterable<T>
): number => {
  let element: ReactElement | null = ignoreFragment(node);

  if (!isElementOfType(element, types)) return 0;

  let count = 0;

  while (isElementOfType(element, types)) {
    count++;
    element = getChild(element);
  }

  return count;
};
