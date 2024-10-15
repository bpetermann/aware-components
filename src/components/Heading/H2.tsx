import React, { useEffect } from 'react';
import { DEVELOPMENT, H_2 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../test/helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H2(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  if (DEVELOPMENT) {
    useEffect(() => dispatch(addHeading(H_2)), []);

    if (headings.length)
      a11yChecks.heading([...headings, H_2], props)?.forEach(warn);
  }

  return <h2 {...rest}>{children}</h2>;
}
