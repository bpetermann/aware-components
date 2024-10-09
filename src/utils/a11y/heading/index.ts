import { messages } from '../../messages';

const isUnique = (headings: string[]): boolean =>
  headings.filter((h) => h === 'h1')?.length > 1;

const hasPrevHeading = (heading: string, headings: string[]): boolean =>
  heading !== 'h1' && !headings.includes(`h${+heading[1] - 1}`);

export const headingChecks = (headings: string[]): string[] => {
  const heading = headings.pop();

  if (!heading || !headings.length) return [];

  return [
    ...(hasPrevHeading(heading, headings)
      ? [messages.heading.skip + heading]
      : []),
  ];
};

export const h1Checks = (headings: string[]): string[] => {
  return [
    ...(isUnique(headings.slice(0, -1)) ? [messages.heading.unique] : []),
  ];
};
