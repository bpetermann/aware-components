import React, { useEffect } from 'react';
import { H_6 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H6(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => dispatch(addHeading(H_6)), []);
    if (headings.length)
      a11yChecks
        .heading([...headings, H_6])
        ?.forEach((err) => console.warn(err));
  }

  return <h5 {...rest}>{children}</h5>;
}
