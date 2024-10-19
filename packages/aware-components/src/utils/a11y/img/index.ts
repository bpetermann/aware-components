import { checkAltText } from './checks/checkAltText';
import { checkGenericAlt } from './checks/checkGenericAlt';
import { ImgProps } from './types/imgProps';

export const imgChecks = (props: ImgProps): string[] =>
  [checkGenericAlt(props), checkAltText(props)].filter(
    (check) => check !== null
  );
