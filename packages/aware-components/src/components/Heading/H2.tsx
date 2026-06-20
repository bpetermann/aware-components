import React, { useEffect } from 'react';
import { DEVELOPMENT, H_2 } from '../../constants';
import { addHeading, useAccessibility } from '../../context';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
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

  useA11yWarnings(
    () =>
      headings.length ? a11yChecks.heading([...headings, H_2], props) : null,
    [headings, props]
  );

  return <h2 {...rest}>{children}</h2>;
}

export const H2 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h2 {...props}>{props.children}</h2>
  );
