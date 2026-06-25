import React, { useEffect } from 'react';
import { DEVELOPMENT, H_3 } from '../../constants';
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

  useEffect(() => dispatch(addHeading(H_3)), [dispatch]);

  useA11yWarnings(
    () =>
      headings.length
        ? a11yChecks.heading([...headings, H_3], props, H_3)
        : null,
    [headings, props]
  );

  return <h3 {...rest}>{children}</h3>;
}

export const H3 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h3 {...props}>{props.children}</h3>
  );
