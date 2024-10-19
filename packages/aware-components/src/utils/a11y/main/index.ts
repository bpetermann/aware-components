import { messages } from '../../messages';

export const mainChecks = (mainAmount: number): string[] =>
  mainAmount > 1 ? [messages.main.unique] : [];
