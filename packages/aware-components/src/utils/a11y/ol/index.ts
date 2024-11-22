import React from 'react';
import { getNoneListItem } from '../../../helper/list';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

const formatWarning = (
  el: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
) => `${messages.ul.children}"${el.type}"`;

export const olChecks = (props: Props) => {
  const noneLiItem = getNoneListItem(props.children);

  return [...(noneLiItem ? [formatWarning(noneLiItem)] : [])];
};
