import { ARIA_DESCRIBEDBY, CAPTION } from '../../../../constants';
import { getFirstChild } from '../../../../helper/children';
import { messages } from '../../../messages';
import { TableProps } from '../types';

export const checkCaption = (props: TableProps, caption: boolean | undefined) =>
  getFirstChild(props.children)?.type !== CAPTION &&
  !caption &&
  !props[ARIA_DESCRIBEDBY]
    ? messages.table.caption
    : null;
