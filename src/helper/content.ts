import React from 'react';

const getTextFromArray = (children: React.ReactNode): string | null => {
  if (!Array.isArray(children)) return null;

  return children.map(getElementTextContent).filter(Boolean).join(' ') || null;
};

const getTextFromElement = (element: React.ReactNode): string | null => {
  if (React.isValidElement(element)) {
    return getElementTextContent(element.props.children);
  }
  return null;
};

const getTextFromFragment = (fragment: React.ReactNode): string | null => {
  if (React.isValidElement(fragment) && fragment.type === React.Fragment) {
    return getElementTextContent(fragment.props.children);
  }
  return null;
};

const getTextFromString = (text: React.ReactNode): string | null => {
  return typeof text === 'string' && text.trim().length > 0 ? text : null;
};

/**
 * Recursively get the text content from any type of React node.
 * Handles strings, elements, fragments, and arrays.
 */
export const getElementTextContent = (
  children?: React.ReactNode
): string | null => {
  if (!children) return null;

  return (
    getTextFromString(children) ??
    getTextFromArray(children) ??
    getTextFromElement(children) ??
    getTextFromFragment(children) ??
    null
  );
};
