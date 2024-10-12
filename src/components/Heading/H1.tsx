import React, { useEffect } from 'react';
import { H_1 } from '../../constants';
import { addHeading, deleteHeading, useAccessibility } from '../../context';
import { warn } from '../../test/helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function H1(props: Props) {
  const { children, ...rest } = props;
  const { headings, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addHeading(H_1));
      return () => dispatch(deleteHeading(H_1));
    }, []);

    if (headings.length) a11yChecks.h1(headings)?.forEach(warn);
  }

  return <h1 {...rest}>{children}</h1>;
}
