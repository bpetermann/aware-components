import { TABLE_DATA, TABLE_HEADER } from '../../../constants';
import { Scope } from '../../../context/table/types';
import {
  extractHeaderCells,
  filterTableCells,
  getTableRows,
  hasColHeading,
  isMultiHeadingTable,
  isTwoHeadingTable,
} from '../../../helper/tables';
import { checkCaption } from './checks/checkCaption';
import { checkColHeader } from './checks/checkColHeader';
import { checkMultiHeader } from './checks/checkMultiHeader';
import { checkRowHeader } from './checks/checkRowHeader';
import { TableProps } from './types';

const getHeadings = (rows: number, columns: number, header: Scope[]) => ({
  hasColHeading: !!columns || hasColHeading(header),
  hastwoHeadings: (columns === 1 && !!rows) || isTwoHeadingTable(header),
  hasMultiHeadings: (columns > 1 && !!rows) || isMultiHeadingTable(header),
});

export const tableChecks = (
  props: TableProps,
  header: Scope[],
  caption: boolean | undefined
) => {
  const rows = getTableRows(props.children);

  const dataCells = filterTableCells(rows, TABLE_DATA);
  const headerCells = filterTableCells(rows, TABLE_HEADER);

  const rowHeadings = extractHeaderCells(dataCells);
  const colHeadings = extractHeaderCells(headerCells);

  const headings = [...colHeadings, ...rowHeadings];

  const { hasColHeading, hastwoHeadings, hasMultiHeadings } = getHeadings(
    rowHeadings.length,
    headerCells.length,
    header
  );

  return [
    checkColHeader(hasColHeading),
    ...(hastwoHeadings ? [checkRowHeader(headings)] : []),
    ...(hasMultiHeadings ? [checkMultiHeader(headings, rows)] : []),
    ...(hasMultiHeadings ? [checkCaption(props, caption)] : []),
  ].filter((check) => check !== null);
};
