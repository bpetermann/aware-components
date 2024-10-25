import React, { useEffect } from 'react';
import { DEVELOPMENT, H_2 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function Development(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useEffect(() => dispatch(addHeading(H_2)), [dispatch]);

  if (headings.length)
    a11yChecks.heading([...headings, H_2], props)?.forEach(warn);

  return <h2 {...rest}>{children}</h2>;
}

export const H2 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h2 {...props}>{props.children}</h2>
  );
