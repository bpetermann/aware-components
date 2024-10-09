import React, { useEffect } from 'react';
import { H_2 } from '../../constants';
import { useAccessibility } from '../../context/a11y';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H2(props: Props) {
  const { children, ...rest } = props;
  const { isCtx, registerHeading, headings } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => registerHeading(H_2), []);
    if (isCtx)
      a11yChecks
        .heading([...headings, H_2])
        ?.forEach((err) => console.warn(err));
  }

  return <h2 {...rest}>{children}</h2>;
}
