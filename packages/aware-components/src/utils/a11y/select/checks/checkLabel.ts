import { ARIA_LABELLEDBY } from '../../../../constants';
import { messages } from '../../../messages';
import { SelectProps } from '../types';

export const checkLabel = (
  props: SelectProps,
  labels: string[]
): string | null =>
  labels.length && !labels.includes(props.id || '') && !props[ARIA_LABELLEDBY]
    ? `${messages.select.label}"${props?.id || ''}"`
    : null;
