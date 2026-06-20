import React from 'react';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
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

  useA11yWarnings(
    () => (a11y ? a11yChecks.fieldset(props) : null),
    [props, a11y]
  );

  return <fieldset {...rest}>{children}</fieldset>;
}
