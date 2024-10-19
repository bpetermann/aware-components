import React from 'react';

export const isImageElement = (child: React.ReactNode): boolean =>
  React.isValidElement(child) && child.type === 'img';

export const containsImageElement = (children?: React.ReactNode): boolean =>
  isImageElement(children) ||
  (Array.isArray(children) &&
    !!children.find((child) => isImageElement(child)));

export const containsTextChild = (children?: React.ReactNode): boolean =>
  typeof children === 'string' && children.trim().length > 0;
