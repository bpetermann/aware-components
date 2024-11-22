import { messages } from '../../messages';

export const liChecks = (isInsideList: boolean) => [
  ...(!isInsideList ? [messages.li.list] : []),
];
