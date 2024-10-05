import { checkButtonRole } from './checks/checkButtonRole';
import { checkDivSoup } from './checks/checkDivSoup';
import { checkWrongAttributes } from './checks/checkWrongAttributes';
import { DivProps } from './types/DivProps';

export const divChecks = (props: DivProps): string[] =>
  [
    checkButtonRole(props),
    checkWrongAttributes(props),
    checkDivSoup(props),
  ].filter((check) => check !== null);
