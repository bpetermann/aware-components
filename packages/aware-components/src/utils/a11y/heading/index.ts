import { checkColorContrast } from '../style/checkColorContrast';
import { checkPrevHeading } from './checks/checkPrevHeading';
import { checkUniqueness } from './checks/checkUniqueness';
import { HeadingProps } from './types/headingProps';

export const headingChecks = (
  headings: string[],
  props: HeadingProps,
  current: string = headings[headings.length - 1]
): string[] =>
  [
    current === 'h1' ? checkUniqueness(headings) : checkPrevHeading(headings),
    checkColorContrast(props, current),
  ].filter((check) => check !== null);
