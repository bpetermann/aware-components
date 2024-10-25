import React from 'react';
import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  a11y?: boolean;
}

export function Fieldset(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.fieldset(props)?.forEach(warn);

  return <fieldset {...rest}>{children}</fieldset>;
}
