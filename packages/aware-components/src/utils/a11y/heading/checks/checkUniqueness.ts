import { messages } from '../../../messages';

export const checkUniqueness = (headings: string[]): string | null =>
  headings.filter((h) => h === 'h1')?.length > 1
    ? messages.heading.unique + headings.filter((h) => h === 'h1').length
    : null;
