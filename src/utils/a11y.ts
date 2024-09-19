import React from 'react';
import { messages } from './messages';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const isImageElement = (child: React.ReactNode): boolean =>
  React.isValidElement(child) && child.type === 'img';

export const containsImageElement = (children?: React.ReactNode): boolean => {
  return (
    isImageElement(children) ||
    (Array.isArray(children) &&
      !!children.find((child) => isImageElement(child)))
  );
};

const containsTextChild = (children?: React.ReactNode): boolean =>
  typeof children === 'string' && children.trim().length > 0;

const containsValidArrayChildren = (children?: React.ReactNode): boolean => {
  return (
    Array.isArray(children) &&
    children.some(
      (child) =>
        containsTextChild(child) ||
        (React.isValidElement(child) && containsTextualContent(child))
    )
  );
};

const isValidElementChild = (children: React.ReactNode): boolean =>
  React.isValidElement(children) && containsAccessibleText(children.props);

const containsFragmentWithText = (children: React.ReactNode): boolean =>
  React.isValidElement(children) &&
  children.type === React.Fragment &&
  containsTextualContent(children.props.children);

export const containsTextualContent = (children?: React.ReactNode): boolean => {
  return (
    containsTextChild(children) ||
    containsValidArrayChildren(children) ||
    isValidElementChild(children) ||
    containsFragmentWithText(children)
  );
};

const hasAccessibleLabel = (props: ButtonProps): boolean =>
  ('aria-label' in props && !!props['aria-label']) ||
  ('aria-labelledby' in props && !!props['aria-labelledby']) ||
  ('title' in props && !!props['title']);

export const containsAccessibleText = (props: ButtonProps): boolean => {
  return (
    hasAccessibleLabel(props) ||
    containsImageElement(props.children) ||
    containsTextualContent(props.children)
  );
};

const getTextContentWarning = (props: ButtonProps): string | undefined => {
  if (!containsAccessibleText(props)) return messages.button.text;
};

export const checkAbstractRole = (props: ButtonProps): string | undefined => {
  if (
    props.role &&
    [
      'command',
      'composite',
      'input',
      'landmark',
      'range',
      'roletype',
      'section',
      'sectionhead',
      'select',
      'structure',
      'widget',
      'window',
    ].includes(props.role)
  ) {
    return messages.button.role;
  }
};

const buttonChecks = (props: ButtonProps): string[] => {
  return [getTextContentWarning(props), checkAbstractRole(props)].filter(
    (value) => value !== undefined
  );
};

export const a11yChecks = {
  button: buttonChecks,
};
