import React from 'react';
import { UL } from '../../../constants';
import { formatWarning, getNoneListItem } from '../../../helper/list';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export const ulChecks = (props: Props) =>
  [
    ...[formatWarning(getNoneListItem(props.children), UL)],
    checkColorContrast(props, UL),
  ].filter((check) => check !== null);
