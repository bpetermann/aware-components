import {
  ARIA_LABEL,
  ARIA_LABELLEDBY,
  GENERIC_TEXTS,
} from '../../../../constants';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkGenericText = (
  props: AnchorProps,
  text: string
): string | null =>
  GENERIC_TEXTS.includes(text.toLowerCase().trim()) &&
  (!props[ARIA_LABEL] || GENERIC_TEXTS.includes(props[ARIA_LABEL])) &&
  !props[ARIA_LABELLEDBY]
    ? messages.anchor.generic + text
    : null;
