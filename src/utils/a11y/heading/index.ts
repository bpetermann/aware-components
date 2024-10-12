import { messages } from '../../messages';

export const headingChecks = (headings: string[]): string[] => {
  const heading = headings.pop();

  return [
    ...(heading && headings.length && !headings.includes(`h${+heading[1] - 1}`)
      ? [messages.heading.skip + heading]
      : []),
  ];
};

export const h1Checks = (headings: string[]): string[] => [
  ...(headings.filter((h) => h === 'h1')?.length > 1
    ? [messages.heading.unique + headings.filter((h) => h === 'h1').length]
    : []),
];
