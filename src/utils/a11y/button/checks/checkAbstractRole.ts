import { ABSTRACT_ROLES } from '../../../../constants';
import { messages } from '../../../messages';
import { ButtonProps } from '../types/buttonPropsType';

export const checkAbstractRole = (props: ButtonProps): string | null =>
  props.role && ABSTRACT_ROLES.includes(props.role)
    ? messages.button.role
    : null;
