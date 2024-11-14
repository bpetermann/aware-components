import React from 'react';
import { DEVELOPMENT } from '../../constants';
import { useTable } from '../../context/table/actions';
import { warn } from '../../helper/consoleWarn';
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

  if (a11y && header.length) a11yChecks.td(props, header)?.forEach(warn);

  return <td {...rest}>{children}</td>;
}

export const Td = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <td {...props}>{props.children}</td>
  );
