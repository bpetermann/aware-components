import { ReactElement } from 'react';
import { ARIA_DESCRIBEDBY, CAPTION } from '../../../../constants';
import { getFirstChild } from '../../../../helper/children';
import { messages } from '../../../messages';
import { TableProps } from '../types';

export const checkCaption = (
  props: TableProps,
  rowHeaders: ReactElement[],
  headerCount: number
) =>
  rowHeaders.length &&
  headerCount > 1 &&
  getFirstChild(props.children)?.type !== CAPTION &&
  !props[ARIA_DESCRIBEDBY]
    ? messages.table.caption
    : null;
