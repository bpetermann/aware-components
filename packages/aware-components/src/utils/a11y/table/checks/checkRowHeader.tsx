import { ReactElement } from 'react';
import {
  hasColumnGroupScope,
  validateScopeAttribute,
} from '../../../../helper/tables';
import { messages } from '../../../messages';

export const checkRowHeader = (
  colHeaders: ReactElement[],
  rowHeaders: ReactElement[]
) =>
  colHeaders.length &&
  rowHeaders.length &&
  !validateScopeAttribute([...colHeaders, ...rowHeaders]) &&
  !hasColumnGroupScope([...colHeaders, ...rowHeaders])
    ? messages.table.row
    : null;
