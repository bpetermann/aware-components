import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Th, Tr } from '../components';
import { TABLE_DATA, TABLE_HEADER, TABLE_ROW } from '../constants';
import { Scope } from '../context/table/types';

export const getTableRows = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getTableRows)
    : isValidElement(element)
    ? element.type === TABLE_ROW || element.type === Tr
      ? [element]
      : React.Children.toArray(element.props.children).flatMap(getTableRows)
    : [];

export const filterTableCells = (
  rows: ReactElement[],
  cellType: typeof TABLE_DATA | typeof TABLE_HEADER
): ReactElement[] =>
  rows.filter((row) => {
    const children = React.Children.toArray(row.props.children);
    const cellElement = cellType === TABLE_HEADER ? Th : null;
    const cellCount = children.filter(
      (child) =>
        isValidElement(child) &&
        (child.type === cellType || child.type === cellElement)
    ).length;
    return cellCount >= Math.ceil(children.length / 2);
  });

export const extractHeaderCells = (rows: ReactElement[]): ReactElement[] =>
  rows.flatMap((row) => {
    const childArray = React.Children.toArray(row.props.children).filter(
      (child) => isValidElement(child)
    );
    return childArray.filter(
      (child) => child.type === TABLE_HEADER || child.type === Th
    );
  });

export const extractChildTypes = (children: React.ReactNode) =>
  React.Children.toArray(children)
    .map((child) => (React.isValidElement(child) ? child.type : null))
    .filter(Boolean);

export const hasColumnGroupScope = (headers: ReactElement[]) =>
  headers.some((header) => header.props?.scope === 'colgroup');

export const validateScopeAttribute = (headers: ReactElement[]) =>
  headers.every((header) => header.props?.scope || header.props?.headers);

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

export const getHeaderScope = (
  children: React.ReactNode
): Scope | undefined => {
  const header = extractChildTypes(children).filter(
    (child) => child === TABLE_HEADER
  );
  const cellCount = React.Children.toArray(children).length;

  return header.length === 1 && cellCount > 1
    ? 'row'
    : header.length >= Math.ceil(cellCount / 2)
    ? 'col'
    : undefined;
};

export const getTableLevel = (
  scopes: Scope[]
): 'one' | 'two' | 'multi' | undefined => {
  const rowCount = scopes.filter((scope) => scope === 'row').length;
  const colCount = scopes.filter((scope) => scope === 'col').length;

  if (colCount === 1) {
    return rowCount ? 'two' : 'one';
  } else if (colCount > 1 && rowCount) {
    return 'multi';
  }
};
