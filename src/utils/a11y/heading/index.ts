import { checkColorContrast } from '../style/checkColorContrast';
import { checkPrevHeading } from './checks/checkPrevHeading';
import { checkUniqueness } from './checks/checkUniqueness';
import { HeadingProps } from './types/headingProps';

export const headingChecks = (
  headings: string[],
  props: HeadingProps
): string[] =>
  [
    ...(headings[headings.length - 1] !== 'h1'
      ? [checkPrevHeading(headings)]
      : [checkUniqueness(headings)]),
    checkColorContrast(props, headings[headings.length - 1]),
  ].filter((check) => check !== null);
