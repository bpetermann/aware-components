import React from 'react';
import { OL } from '../../../constants';
import { formatWarning, getNoneListItem } from '../../../helper/list';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export const olChecks = (props: Props) =>
  [
    ...[formatWarning(getNoneListItem(props.children), OL)],
    checkColorContrast(props, OL),
  ].filter((check) => check !== null);
