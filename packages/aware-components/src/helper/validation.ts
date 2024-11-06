import React from 'react';
import { Img } from '../components';

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
