import { P } from '../../../constants';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkFontSize } from './checks/checkFontSize';
import { checkHeading } from './checks/checkHeading';
import { ParagraphProps } from './types';

export const paragraphChecks = (props: ParagraphProps): string[] =>
  [
    checkHeading(props),
    checkFontSize(props),
    checkColorContrast(props, P),
  ].filter((check) => check !== null);
