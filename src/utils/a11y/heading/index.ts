import { checkPrevHeading } from './checks/checkPrevHeading';
import { checkUniqueness } from './checks/checkUniqueness';

export const headingChecks = (headings: string[]): string[] =>
  [
    ...(headings[headings.length - 1] !== 'h1'
      ? [checkPrevHeading(headings)]
      : [checkUniqueness(headings)]),
  ].filter((check) => check !== null);
