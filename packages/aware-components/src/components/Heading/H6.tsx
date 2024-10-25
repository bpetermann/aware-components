import React, { useEffect } from 'react';
import { DEVELOPMENT, H_6 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function Dev(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useEffect(() => dispatch(addHeading(H_6)), [dispatch]);

  if (headings.length)
    a11yChecks.heading([...headings, H_6], props)?.forEach(warn);

  return <h6 {...rest}>{children}</h6>;
}

function Prod(props: Props) {
  return <h6 {...props}>{props.children}</h6>;
}

export const H6 = (props: Props) =>
  DEVELOPMENT ? <Dev {...props} /> : <Prod {...props} />;
