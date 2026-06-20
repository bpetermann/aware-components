import React from 'react';
import { DEVELOPMENT } from '../../constants';
import { useTable } from '../../context/table/actions';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;
  const { header } = useTable();

  useA11yWarnings(
    () => (a11y && header.length ? a11yChecks.td(props, header) : null),
    [props, a11y, header]
  );

  return <td {...rest}>{children}</td>;
}

export const Td = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <td {...props}>{props.children}</td>
  );
