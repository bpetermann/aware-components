import { ON_CLICK, ROLE } from '../../../../constants';
import { messages } from '../../../messages';
import { DivProps } from '../types/DivProps';

export const checkButtonRole = (props: DivProps) =>
  props[ROLE] === 'button' || props[ON_CLICK] ? messages.div.button : null;
