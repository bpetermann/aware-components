import React from 'react';
import { DEVELOPMENT, H_3 } from '../../constants';
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

export function H3(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useConditionalEffect(() => dispatch(addHeading(H_3)), dispatch);

  if (DEVELOPMENT && headings.length)
    a11yChecks.heading([...headings, H_3], props)?.forEach(warn);

  return <h3 {...rest}>{children}</h3>;
}
