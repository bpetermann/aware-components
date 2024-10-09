import React, { useEffect } from 'react';
import { useAccessibility } from '../../context/a11y';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  a11y?: boolean;
}

export function H2(props: Props) {
  const { a11y, children, ...rest } = props;
  const { registerHeading, headings } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => registerHeading('h2'), []);
    if (a11y) a11yChecks.heading(headings)?.forEach((err) => console.warn(err));
  }

  return <h2 {...rest}>{children}</h2>;
}
