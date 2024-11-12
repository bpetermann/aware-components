import { TABLE_DATA, TABLE_HEADER } from '../../../constants';
import {
  extractHeaderCells,
  filterTableCells,
  getTableRows,
} from '../../../helper/tables';
import { checkColHeader } from './checks/checkColHeader';
import { checkMultiHeader } from './checks/checkMultiHeader';
import { checkRowHeader } from './checks/checkRowHeader';
import { TableProps } from './types';

export const tableChecks = (props: TableProps) => {
  const rows = getTableRows(props.children);

  const dataCells = filterTableCells(rows, TABLE_DATA);
  const headerCells = filterTableCells(rows, TABLE_HEADER);

  const rowHeaders = extractHeaderCells(dataCells);
  const colHeaders = extractHeaderCells(headerCells);

  return [
    checkColHeader(colHeaders),
    checkRowHeader(colHeaders, rowHeaders),
    checkMultiHeader(colHeaders, rowHeaders, headerCells.length, rows),
  ].filter((check) => check !== null);
};
