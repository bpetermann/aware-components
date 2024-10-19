import React from 'react';
import { DEVELOPMENT, H_5 } from '../../constants';
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

export function H5(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useConditionalEffect(() => dispatch(addHeading(H_5)), dispatch);

  if (DEVELOPMENT && headings.length)
    a11yChecks.heading([...headings, H_5], props)?.forEach(warn);

  return <h5 {...rest}>{children}</h5>;
}
