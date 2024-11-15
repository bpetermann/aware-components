import { ReactElement } from 'react';
import {
  validateHeadersAttribute,
  validateIdAttribute,
  validateScopeAttribute,
} from '../../../../helper/tables';
import { messages } from '../../../messages';

export const checkMultiHeader = (
  headings: ReactElement[],
  rows: ReactElement[]
) =>
  !validateScopeAttribute(headings) ||
  !validateIdAttribute(headings) ||
  !validateHeadersAttribute(rows)
    ? messages.table.multi
    : null;
