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

export function H1(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  useEffect(() => {
    if (DEVELOPMENT) {
      dispatch(addHeading(H_1));
      return () => dispatch(deleteHeading(H_1));
    }
  }, [dispatch]);

  if (DEVELOPMENT && headings.length)
    a11yChecks.heading(headings, props)?.forEach(warn);

  return <h1 {...rest}>{children}</h1>;
}
