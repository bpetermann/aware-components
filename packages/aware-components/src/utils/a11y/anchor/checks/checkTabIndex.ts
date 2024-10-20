import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

export const checkTabIndex = (props: AnchorProps): string | null =>
  props.tabIndex !== undefined && (props.href || props.tabIndex < 0)
    ? messages.anchor.tabIndex
    : null;
