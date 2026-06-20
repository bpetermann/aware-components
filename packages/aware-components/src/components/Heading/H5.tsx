import React, { useEffect } from 'react';
import { DEVELOPMENT, H_5 } from '../../constants';
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

  useEffect(() => dispatch(addHeading(H_5)), [dispatch]);

  useA11yWarnings(
    () =>
      headings.length ? a11yChecks.heading([...headings, H_5], props) : null,
    [headings, props]
  );

  return <h5 {...rest}>{children}</h5>;
}

export const H5 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h5 {...props}>{props.children}</h5>
  );
