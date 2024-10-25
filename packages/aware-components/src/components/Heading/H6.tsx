import React from 'react';
import { DEVELOPMENT, H_6 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../helper/consoleWarn';
import { useConditionalEffect } from '../../hooks/useConditionalEffect';
import { a11yChecks } from '../../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H6(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useConditionalEffect(() => dispatch(addHeading(H_6)), dispatch);

  if (DEVELOPMENT && headings.length)
    a11yChecks.heading([...headings, H_6], props)?.forEach(warn);

  return <h6 {...rest}>{children}</h6>;
}
