import { messages } from '../../messages';

export const liCheck = (isInsideList: boolean) => [
  ...(!isInsideList ? [messages.li.list] : []),
];
