import { checkAbstractRole } from './checks/checkAbstractRole';
import { checkMinSize } from './checks/checkMinSize';
import { checkSwitchRole } from './checks/checkSwitchRole';
import { checkTextContext } from './checks/checkTextContent';
import { ButtonProps } from './types/buttonProps';

export const buttonChecks = (props: ButtonProps): string[] =>
  [
    checkTextContext(props),
    checkAbstractRole(props),
    checkSwitchRole(props),
    checkMinSize(props),
  ].filter((check) => check !== null);
