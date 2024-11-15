import { Table, TABLE_DATA, TABLE_HEADER } from '../../../constants';
import { Scope } from '../../../context/table/types';
import {
  extractHeaderCells,
  filterTableCells,
  getTableRows,
  hasColHeading,
  isMultiHeadingTable,
  isTwoHeadingTable,
} from '../../../helper/tables';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkCaption } from './checks/checkCaption';
import { checkColHeader } from './checks/checkColHeader';
import { checkMultiHeader } from './checks/checkMultiHeader';
import { checkRowHeader } from './checks/checkRowHeader';
import { TableProps } from './types';

type ValidElement = React.ReactElement<
  unknown,
  string | React.JSXElementConstructor<unknown>
>;

const getHeadings = (rows: number, columns: number, header: Scope[]) => ({
  hasColHeading: !!columns || hasColHeading(header),
  hastwoHeadings: (columns === 1 && !!rows) || isTwoHeadingTable(header),
  hasMultiHeadings: (columns > 1 && !!rows) || isMultiHeadingTable(header),
});

const getFilteredCells = (
  rows: ValidElement[]
): [td: ValidElement[], th: ValidElement[]] => [
  filterTableCells(rows, TABLE_DATA),
  filterTableCells(rows, TABLE_HEADER),
];

const getExtractedHeadings = (
  data: ValidElement[],
  header: ValidElement[]
): [rows: ValidElement[], columns: ValidElement[]] => [
  extractHeaderCells(data),
  extractHeaderCells(header),
];

export const tableChecks = (
  props: TableProps,
  header: Scope[],
  caption: boolean | undefined
) => {
  const rows = getTableRows(props.children);

  const [tdCells, thCells] = getFilteredCells(rows);

  const [rowHeadings, colHeadings] = getExtractedHeadings(tdCells, thCells);

  const { hasColHeading, hastwoHeadings, hasMultiHeadings } = getHeadings(
    rowHeadings.length,
    thCells.length,
    header
  );

  const headings = [...colHeadings, ...rowHeadings];

  return [
    checkColHeader(hasColHeading),
    checkColorContrast(props, Table),
    ...(hastwoHeadings ? [checkRowHeader(headings)] : []),
    ...(hasMultiHeadings ? [checkMultiHeader(headings, rows)] : []),
    ...(hasMultiHeadings ? [checkCaption(props, caption)] : []),
  ].filter((check) => check !== null);
};
