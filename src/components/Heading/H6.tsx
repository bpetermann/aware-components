import React, { useEffect } from 'react';
import { useAccessibility } from '../../context/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  a11y?: boolean;
}

export function H6(props: Props) {
  const { a11y, children, ...rest } = props;
  const { registerHeading } = useAccessibility();

  if (import.meta.env.DEV) useEffect(() => registerHeading('h6'), []);

  return <h6 {...rest}>{children}</h6>;
}
