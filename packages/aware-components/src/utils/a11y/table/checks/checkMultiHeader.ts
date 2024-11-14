import { ReactElement } from 'react';
import {
  validateHeadersAttribute,
  validateIdAttribute,
  validateScopeAttribute,
} from '../../../../helper/tables';
import { messages } from '../../../messages';

export const checkMultiHeader = (
  colHeaders: ReactElement[],
  rowHeaders: ReactElement[],
  headerCount: number,
  rows: ReactElement[]
) =>
  rowHeaders.length &&
  headerCount > 1 &&
  (!validateScopeAttribute([...colHeaders, ...rowHeaders]) ||
    !validateHeadersAttribute(rows) ||
    !validateIdAttribute([...colHeaders, ...rowHeaders]))
    ? messages.table.multi
    : null;
