import React, { useEffect } from 'react';
import { DEVELOPMENT, H_3 } from '../../constants';
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

  useEffect(() => dispatch(addHeading(H_3)), [dispatch]);

  if (headings.length)
    a11yChecks.heading([...headings, H_3], props)?.forEach(warn);

  return <h3 {...rest}>{children}</h3>;
}

function Prod(props: Props) {
  return <h3 {...props}>{props.children}</h3>;
}

export const H3 = (props: Props) =>
  DEVELOPMENT ? <Dev {...props} /> : <Prod {...props} />;
