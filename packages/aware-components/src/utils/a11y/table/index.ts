import React from 'react';
import { TABLE_DATA, TABLE_HEADER } from '../../../constants';
import {
  getRowHeaders,
  getTableDetail,
  getTableRows,
} from '../../../helper/tables';
import { checkColHeader } from './checks/checkColHeader';
import { checkMultiHeader } from './checks/checkMultiHeader';
import { checkRowHeader } from './checks/checkRowHeader';

export type TableProps = React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export const tableChecks = (props: TableProps) => {
  const rows = getTableRows(props.children);

  const rowHeaders = getRowHeaders(getTableDetail(rows, TABLE_DATA));
  const headerColumns = getTableDetail(rows, TABLE_HEADER);
  const colHeaders = getRowHeaders(headerColumns);

  return [
    checkColHeader(colHeaders),
    checkRowHeader(colHeaders, rowHeaders),
    checkMultiHeader(colHeaders, rowHeaders, headerColumns.length),
  ].filter((check) => check !== null);
};
