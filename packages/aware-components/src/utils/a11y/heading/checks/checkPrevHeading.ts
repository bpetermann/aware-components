import { messages } from '../../../messages';

export const checkPrevHeading = (headings: string[]): string | null => {
  const heading = headings[headings.length - 1];
  const previous = headings.slice(0, -1);

  return heading && !previous.includes(`h${+heading[1] - 1}`)
    ? `[${heading}] ${messages.heading.skip}`
    : null;
};
