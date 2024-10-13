import { messages } from '../../../messages';

export const checkPrevHeading = (headings: string[]): string | null => {
  const heading = headings.pop();

  return heading && !headings.includes(`h${+heading[1] - 1}`)
    ? `[${heading}] ${messages.heading.skip}`
    : null;
};
