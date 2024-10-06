import { ABSTRACT_ROLES } from '../../../../constants';
import { messages } from '../../../messages';
import { DivProps } from '../types/DivProps';

export const checkAbstractRole = (props: DivProps): string | null =>
  props.role && ABSTRACT_ROLES.includes(props.role) ? messages.div.role : null;
