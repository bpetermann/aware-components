import React, { useEffect } from 'react';
import { DEVELOPMENT, H_4 } from '../../constants';
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

  useEffect(() => dispatch(addHeading(H_4)), [dispatch]);

  if (headings.length)
    a11yChecks.heading([...headings, H_4], props)?.forEach(warn);

  return <h4 {...rest}>{children}</h4>;
}

export const H4 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h4 {...props}>{props.children}</h4>
  );
