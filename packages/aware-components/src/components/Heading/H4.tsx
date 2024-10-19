import React from 'react';
import { DEVELOPMENT, H_4 } from '../../constants';
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

export function H4(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useConditionalEffect(() => dispatch(addHeading(H_4)), dispatch);

  if (DEVELOPMENT && headings.length)
    a11yChecks.heading([...headings, H_4], props)?.forEach(warn);

  return <h4 {...rest}>{children}</h4>;
}
