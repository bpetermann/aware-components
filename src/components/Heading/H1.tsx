import React, { useEffect } from 'react';
import { H_1 } from '../../constants';
import { useAccessibility } from '../../context/a11y';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H1(props: Props) {
  const { children, ...rest } = props;
  const { isCtx, registerHeading, headings } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => registerHeading(H_1), []);
    if (isCtx) a11yChecks.h1(headings)?.forEach((err) => console.warn(err));
  }

  return <h1 {...rest}>{children}</h1>;
}
