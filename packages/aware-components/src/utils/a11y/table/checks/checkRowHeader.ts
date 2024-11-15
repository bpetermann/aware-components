import { ReactElement } from 'react';
import { validateScopeAttribute } from '../../../../helper/tables';
import { messages } from '../../../messages';

export const checkRowHeader = (headers: ReactElement[]): string | null =>
  !validateScopeAttribute(headers) ? messages.table.row : null;
