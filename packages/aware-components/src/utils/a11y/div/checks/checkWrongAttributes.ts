import { ARIA_EXPANDED } from '../../../../constants';
import { messages } from '../../../messages';
import { DivProps } from '../types/DivProps';

export const checkWrongAttributes = (props: DivProps) =>
  props[ARIA_EXPANDED] ? messages.div.expanded : null;
