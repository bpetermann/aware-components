import React, { useEffect } from 'react';
import { H_4 } from '../../constants';
import { useAccessibility } from '../../context/a11y';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  a11y?: boolean;
}

export function H4(props: Props) {
  const { a11y, children, ...rest } = props;
  const { registerHeading, headings } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => registerHeading(H_4), []);
    if (a11y)
      a11yChecks
        .heading([...headings, H_4])
        ?.forEach((err) => console.warn(err));
  }

  return <h4 {...rest}>{children}</h4>;
}
