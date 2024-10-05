import { checkButtonRole } from './checks/checkButtonRole';
import { checkWrongAttributes } from './checks/checkWrongAttributes';
import { DivProps } from './types/DivProps';

export const divChecks = (props: DivProps): string[] =>
  [checkButtonRole(props), checkWrongAttributes(props)].filter(
    (check) => check !== null
  );
