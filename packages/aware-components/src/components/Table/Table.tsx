import React from 'react';
import { DEVELOPMENT } from '../../constants';
import TableProvider from '../../context/table/provider';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (a11y) a11yChecks.table(props)?.forEach(warn);

  return (
    <TableProvider>
      <table {...rest}>{children}</table>
    </TableProvider>
  );
}

export const Table = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <table {...props}>{props.children}</table>
  );
