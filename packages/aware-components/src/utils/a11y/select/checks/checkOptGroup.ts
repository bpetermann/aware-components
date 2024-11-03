import { ReactElement, isValidElement } from 'react';
import { OPTGROUP } from '../../../../constants';
import { getChildren } from '../../../../helper/children';
import { messages } from '../../../messages';
import { SelectProps } from '../types';

const getOptGroups = (props: SelectProps): ReactElement[] =>
  getChildren(props.children)?.filter(
    (child) => isValidElement(child) && child.type === OPTGROUP
  );

export const checkOptGroup = (props: SelectProps): string | null =>
  getOptGroups(props).every((optGroup) => Boolean(optGroup.props?.label))
    ? null
    : messages.select.optgroup;
