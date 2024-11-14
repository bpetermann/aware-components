import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import { addHeader, deleteHeader, useTable } from '../../context/table/actions';
import { getHeaderScope } from '../../helper/tables';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { children, ...rest } = props;
  const { dispatch } = useTable();

  useEffect(() => {
    const scope = getHeaderScope(props.children);
    dispatch(addHeader(scope));
    return () => dispatch(deleteHeader(scope));
  }, [dispatch, props.children]);

  return <tr {...rest}>{children}</tr>;
}

export const Tr = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <tr {...props}>{props.children}</tr>
  );
