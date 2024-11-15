import React, { ReactElement, ReactNode, isValidElement } from 'react';
import { Td, Th, Tr } from '../components';
import { COLUMN, ROW, TABLE_DATA, TABLE_HEADER, TABLE_ROW } from '../constants';
import { Scope } from '../context/table/types';

type ValidElement =
  | React.ReactPortal
  | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;

const idTableData = (element: ValidElement) =>
  element.type === TABLE_DATA || element.type === Td;

const idTableHeader = (element: ValidElement) =>
  element.type === TABLE_HEADER || element.type === Th;

const isTableRow = (element: ValidElement) =>
  element.type === TABLE_ROW || element.type === Tr;

const toChildArray = (element: ValidElement) =>
  React.Children.toArray(element.props.children);

export const getTableRows = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getTableRows)
    : isValidElement(element)
    ? isTableRow(element)
      ? [element]
      : toChildArray(element).flatMap(getTableRows)
    : [];

export const filterTableCells = (
  rows: ReactElement[],
  cellType: typeof TABLE_DATA | typeof TABLE_HEADER
): ReactElement[] =>
  rows.filter((row) => {
    const children = React.Children.toArray(row.props.children);
    const cellElement = cellType === TABLE_HEADER ? Th : Td;
    const cellCount = children.filter(
      (child) =>
        isValidElement(child) &&
        (child.type === cellType || child.type === cellElement)
    ).length;
    return cellCount >= Math.ceil(children.length / 2);
  });

export const extractHeaderCells = (rows: ReactElement[]): ReactElement[] =>
  rows.flatMap((row) => {
    const childArray = toChildArray(row).filter((child) =>
      isValidElement(child)
    );
    return childArray.filter((child) => idTableHeader(child));
  });

export const hasColumnGroupScope = (headers: ReactElement[]) =>
  headers.some((header) => header.props?.scope === 'colgroup');

export const validateScopeAttribute = (headers: ReactElement[]) =>
  headers.every((header) => header.props?.scope || header.props?.headers);

export const validateIdAttribute = (headers: ReactElement[]) =>
  headers.every((header) => header.props?.id);

export const validateHeadersAttribute = (rows: ReactElement[]): boolean =>
  rows.every((row) =>
    toChildArray(row).every((child) =>
      isValidElement(child) &&
      idTableData(child) &&
      Object.keys(child.props).length
        ? child.props.headers
        : true
    )
  );

export const extractChildTypes = (children: React.ReactNode) =>
  React.Children.toArray(children)
    .map((child) =>
      React.isValidElement(child)
        ? idTableHeader(child)
          ? TABLE_HEADER
          : idTableData(child)
          ? TABLE_DATA
          : null
        : null
    )
    .filter(Boolean);

export const getHeaderScope = (
  children: React.ReactNode
): Scope | undefined => {
  const header = extractChildTypes(children).filter(
    (child) => child === TABLE_HEADER
  );
  const cellCount = React.Children.toArray(children).length;

  return header.length === 1 && cellCount > 1
    ? ROW
    : header.length >= Math.ceil(cellCount / 2)
    ? COLUMN
    : undefined;
};

const getCount = (scopes: Scope[], type: Scope) =>
  scopes.filter((scope) => scope === type).length;

export const isTwoHeadingTable = (scopes: Scope[]): boolean =>
  getCount(scopes, COLUMN) === 1 && !!getCount(scopes, ROW);

export const isMultiHeadingTable = (scopes: Scope[]): boolean =>
  getCount(scopes, COLUMN) > 1 && !!getCount(scopes, ROW);

export const hasColHeading = (scopes: Scope[]): boolean =>
  scopes.includes(COLUMN);
