import { messages } from '../../../messages';

export const checkColHeader = (hasColumnHeader: boolean) =>
  !hasColumnHeader ? messages.table.col : null;
