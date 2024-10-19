import { DIV } from '../../../constants';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkAbstractRole } from './checks/checkAbstractRole';
import { checkAriaHidden } from './checks/checkAriaHidden';
import { checkButtonRole } from './checks/checkButtonRole';
import { checkDivSoup } from './checks/checkDivSoup';
import { checkWrongAttributes } from './checks/checkWrongAttributes';
import { DivProps } from './types/DivProps';

export const divChecks = (props: DivProps): string[] =>
  [
    checkButtonRole(props),
    checkWrongAttributes(props),
    checkDivSoup(props),
    checkAbstractRole(props),
    checkAriaHidden(props),
    checkColorContrast(props, DIV),
  ].filter((check) => check !== null);
