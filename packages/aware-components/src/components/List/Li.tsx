import React from 'react';
import { DEVELOPMENT } from '../../constants';
import { useList } from '../../context/list/actions';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;
  const { isList, bg } = useList();

  useA11yWarnings(
    () => (a11y ? a11yChecks?.li?.(props, isList, bg) : null),
    [props, a11y, isList, bg]
  );

  return <li {...rest}>{children}</li>;
}

export const Li = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <li {...props}>{props.children}</li>
  );
