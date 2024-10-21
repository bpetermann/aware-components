import { ON_CLICK } from '../../../../constants';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkAttributes = (props: AnchorProps): string | null =>
  props[ON_CLICK] ? messages.anchor.onclick : null;
