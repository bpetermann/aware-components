import React, { useEffect } from 'react';
import { H_5 } from '../../constants';
import { useAccessibility } from '../../context/a11y';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H5(props: Props) {
  const { children, ...rest } = props;
  const { isCtx, registerHeading, headings } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => registerHeading(H_5), []);
    if (isCtx)
      a11yChecks
        .heading([...headings, H_5])
        ?.forEach((err) => console.warn(err));
  }
  return <h5 {...rest}>{children}</h5>;
}
