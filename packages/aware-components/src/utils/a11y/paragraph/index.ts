import { P } from '../../../constants';
import { checkColorContrast } from '../style/checkColorContrast';
import { checkAbbrText } from './checks/checkAbbrText';
import { checkFontSize } from './checks/checkFontSize';
import { checkHeading } from './checks/checkHeading';
import { ParagraphProps } from './types';

export const paragraphChecks = (props: ParagraphProps): string[] =>
  [
    checkHeading(props),
    checkFontSize(props),
    checkColorContrast(props, P),
    checkAbbrText(props),
  ].filter((check) => check !== null);
