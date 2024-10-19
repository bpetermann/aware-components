import React, { useEffect } from 'react';
import { DEVELOPMENT, H_3 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H3(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  if (DEVELOPMENT) {
    useEffect(() => dispatch(addHeading(H_3)), []);
    if (headings.length)
      a11yChecks.heading([...headings, H_3], props)?.forEach(warn);
  }

  return <h3 {...rest}>{children}</h3>;
}