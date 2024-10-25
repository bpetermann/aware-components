import React from 'react';
import { LEGEND } from '../../../constants';
import { getFirstChild } from '../../../helper/getFirstChild';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
>;

export const fieldsetChecks = (props: Props): string[] => [
  ...(getFirstChild(props.children)?.type !== LEGEND
    ? [messages.fieldset.legend]
    : []),
];
