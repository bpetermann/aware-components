import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { TABLE_DATA, TABLE_HEADER, TABLE_ROW } from '../constants';

export const getTableRows = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getTableRows)
    : isValidElement(element)
    ? element.type === TABLE_ROW
      ? [element]
      : React.Children.toArray(element.props.children).flatMap(getTableRows)
    : [];

export const filterTableCells = (
  rows: ReactElement[],
  cellType: 'td' | 'th'
): ReactElement[] =>
  rows.filter((row) => {
    const children = React.Children.toArray(row.props.children);
    const cellCount = children.filter(
      (child) => isValidElement(child) && child.type === cellType
    ).length;
    return cellCount >= Math.ceil(children.length / 2);
  });

export const extractHeaderCells = (rows: ReactElement[]): ReactElement[] =>
  rows.flatMap((row) => {
    const childArray = React.Children.toArray(row.props.children).filter(
      (child) => isValidElement(child)
    );
    return childArray.filter((child) => child.type === TABLE_HEADER);
  });

export const hasColumnGroupScope = (headers: ReactElement[]) =>
  headers.some((header) => header.props?.scope === 'colgroup');

export const validateScopeAttribute = (headers: ReactElement[]) =>
  headers.every((header) => header.props?.scope);

export const validateIdAttribute = (headers: ReactElement[]) =>
  headers.every((header) => header.props?.id);

export const validateHeadersAttribute = (rows: ReactElement[]): boolean =>
  rows.every((row) =>
    React.Children.toArray(row.props.children).every((child) =>
      isValidElement(child) &&
      child.type === TABLE_DATA &&
      Object.keys(child.props).length
        ? child.props.headers
        : true
    )
  );
