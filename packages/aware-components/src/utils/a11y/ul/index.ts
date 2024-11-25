import React from 'react';
import { UL } from '../../../constants';
import {
  formatWarning,
  getNoneListItem,
  getRoleListItem,
} from '../../../helper/list';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export const ulChecks = (props: Props) =>
  [
    ...[formatWarning(getNoneListItem(props.children), UL, 'children')],
    ...[formatWarning(getRoleListItem(props.children), UL, 'role')],
    checkColorContrast(props, UL),
  ].filter((check) => check !== null);
