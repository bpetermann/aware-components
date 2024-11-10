import { ReactElement } from 'react';
import { messages } from '../../../messages';

export const hasScopeAndId = (header: ReactElement) =>
  header.props.scope && header.props.id;

export const checkMultiHeader = (
  col: ReactElement[],
  row: ReactElement[],
  colHeaders: number
) =>
  row.length &&
  colHeaders > 1 &&
  [...col, ...row].some((header) => !hasScopeAndId(header))
    ? messages.table.multi
    : null;
