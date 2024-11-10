import { ReactElement } from 'react';
import { messages } from '../../../messages';

export const checkRowHeader = (
  colHeaders: ReactElement[],
  rowHeaders: ReactElement[]
) =>
  rowHeaders.length &&
  [...colHeaders, ...rowHeaders].find((header) => !header.props.scope)
    ? messages.table.row
    : null;
