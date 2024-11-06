import { ARIA_LABEL, ARIA_LABELLEDBY } from '../../../../constants';
import { containsImageElement } from '../../../../helper/children';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkTextContext = (
  props: AnchorProps,
  text: string
): string | null =>
  !text &&
  !containsImageElement(props.children) &&
  !props[ARIA_LABEL] &&
  !props[ARIA_LABELLEDBY]
    ? messages.anchor.text
    : null;
