import { ReactElement } from 'react';
import { messages } from '../../../messages';

export const checkColHeader = (rows: ReactElement[]) =>
  !rows.length ? messages.table.col : null;
