import React, { ReactElement, ReactNode, isValidElement } from 'react';

export const getTableRows = (element: ReactNode): ReactElement[] =>
  Array.isArray(element)
    ? element.flatMap(getTableRows)
    : isValidElement(element)
    ? element.type === 'tr'
      ? [element]
      : React.Children.toArray(element.props.children).flatMap(getTableRows)
    : [];

export const getTableDetail = (
  tableRows: ReactElement[],
  type: 'td' | 'th'
): ReactElement[] =>
  tableRows.filter((tr) => {
    const cellCount = React.Children.toArray(tr.props.children).filter(
      (child) => isValidElement(child) && child.type === type
    ).length;
    return cellCount > Math.ceil(tableRows.length / 2);
  });

export const getRowHeaders = (rows: ReactElement[]) =>
  rows.flatMap((row) =>
    [...row.props.children].filter(
      (child) => isValidElement(row) && child.type === 'th'
    )
  );
