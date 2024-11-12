import { ReactElement } from 'react';
import { messages } from '../../../messages';

export const checkColHeader = (colHeaders: ReactElement[]) =>
  !colHeaders.length ? messages.table.col : null;
