import { checkButtonRole } from './checks/checkButtonRole';
import { DivProps } from './types/DivProps';

export const divChecks = (props: DivProps): string[] =>
  [checkButtonRole(props)].filter((check) => check !== null);
