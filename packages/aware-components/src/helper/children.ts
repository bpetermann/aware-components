import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Img } from '../components';

export const getFirstChild = (element: ReactNode): ReactElement | null => {
  element = Array.isArray(element) ? element[0] : element;

  if (!isValidElement(element)) return null;

  if (element.type === Fragment) {
    const childArray = React.Children.toArray(element.props?.children);
    if (childArray.length === 0) return null;
    return getFirstChild(childArray[0]);
  }

  return element;
};

export const getChildren = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getChildren)
    : isValidElement(element)
    ? element.type === Fragment
      ? React.Children.toArray(element.props.children).flatMap(getChildren)
      : [element]
    : [];

export const isImageElement = (child: React.ReactNode): boolean =>
  React.isValidElement(child) && (child.type === 'img' || child.type === Img);

const isContainerNode = (node: React.ReactNode): node is React.ReactElement =>
  React.isValidElement(node) &&
  (node.type === React.Fragment || node.type === 'div');

const flattenChildren = (node: React.ReactNode): React.ReactNode[] =>
  !node
    ? []
    : Array.isArray(node)
    ? node.flatMap(flattenChildren)
    : isContainerNode(node)
    ? flattenChildren(node.props.children)
    : [node];

export const containsImageElement = (children?: React.ReactNode): boolean =>
  !!children && flattenChildren(children).some(isImageElement);

export const containsTextChild = (children?: React.ReactNode): boolean =>
  typeof children === 'string' && children.trim().length > 0;

export const getTextChildren = (element: ReactNode): string[] =>
  Array.isArray(element)
    ? element.flatMap(getTextChildren)
    : isValidElement(element)
    ? React.Children.toArray(element.props.children).flatMap(getTextChildren)
    : typeof element === 'string'
    ? element.split(' ')
    : [];
