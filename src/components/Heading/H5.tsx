import React, { useEffect } from 'react';
import { DEVELOPMENT, H_5 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../test/helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H5(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  if (DEVELOPMENT) {
    useEffect(() => dispatch(addHeading(H_5)), []);
    if (headings.length)
      a11yChecks.heading([...headings, H_5], props)?.forEach(warn);
  }

  return <h5 {...rest}>{children}</h5>;
}
