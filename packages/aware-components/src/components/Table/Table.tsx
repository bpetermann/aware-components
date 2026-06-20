import React from 'react';
import { DEVELOPMENT } from '../../constants';
import { useTable } from '../../context/table/actions';
import TableProvider from '../../context/table/provider';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
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
  const { header, caption } = useTable();

  useA11yWarnings(
    () => (a11y ? a11yChecks?.table?.(props, header, caption) : null),
    [props, a11y, header, caption]
  );

  return <table {...rest}>{children}</table>;
}

export const Table = (props: Props) =>
  DEVELOPMENT ? (
    <TableProvider>
      <Development {...props} />
    </TableProvider>
  ) : (
    <table {...props}>{props.children}</table>
  );
