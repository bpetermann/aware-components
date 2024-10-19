import { ARIA_CHECKED } from '../../../../constants';
import { messages } from '../../../messages';
import { ButtonProps } from '../types/buttonProps';

const SWITCH = 'switch';

export const checkSwitchRole = (props: ButtonProps): string | null =>
  props.role === SWITCH && !props[ARIA_CHECKED] ? messages.button.switch : null;
