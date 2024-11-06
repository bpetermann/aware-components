import {
  ARIA_LABEL,
  ARIA_LABELLEDBY,
  GENERIC_TEXTS,
} from '../../../../constants';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

const isGenericText = (text: string | undefined) =>
  !!text && GENERIC_TEXTS.includes(text.toLowerCase().trim());

const checkTextAndLabel = (props: AnchorProps, text: string): string | null =>
  isGenericText(text) &&
  (!props[ARIA_LABEL] || isGenericText(props[ARIA_LABEL]))
    ? messages.anchor.generic + text
    : isGenericText(props[ARIA_LABEL]) && !text
    ? messages.anchor.generic + props[ARIA_LABEL]
    : null;

export const checkGenericText = (
  props: AnchorProps,
  text: string
): string | null =>
  /** An accessible text is assumed if aria-labelledby is present*/
  props[ARIA_LABELLEDBY] ? null : checkTextAndLabel(props, text);
