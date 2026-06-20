import React from 'react';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  a11y?: boolean;
}

export function P(props: Props) {
  const { a11y = true, children, ...rest } = props;

  useA11yWarnings(
    () => (a11y ? a11yChecks.paragraph(props) : null),
    [props, a11y]
  );

  return <p {...rest}>{children}</p>;
}
