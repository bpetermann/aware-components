import React, { useEffect } from 'react';
import { DEVELOPMENT, H_1 } from '../../constants';
import { addHeading, deleteHeading, useAccessibility } from '../../context';
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

  useEffect(() => {
    dispatch(addHeading(H_1));
    return () => dispatch(deleteHeading(H_1));
  }, [dispatch]);

  if (headings.length) a11yChecks.heading(headings, props)?.forEach(warn);

  return <h1 {...rest}>{children}</h1>;
}

export const H1 = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <h1 {...props}>{props.children}</h1>
  );
