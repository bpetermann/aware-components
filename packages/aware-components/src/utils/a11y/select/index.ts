import { SELECT } from '../../../constants';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkLabel } from './checks/checkLabel';
import { checkOptGroup } from './checks/checkOptGroup';
import { SelectProps } from './types';

export const selectChecks = (props: SelectProps, labels: string[]): string[] =>
  [
    checkLabel(props, labels),
    checkOptGroup(props),
    checkColorContrast(props, SELECT),
  ].filter((check) => check !== null);
