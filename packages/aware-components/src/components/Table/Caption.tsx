import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import {
  addCaption,
  deleteCaption,
  useTable,
} from '../../context/table/actions';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableCaptionElement>,
  HTMLTableCaptionElement
>;

export function Development(props: Props) {
  const { children, ...rest } = props;
  const { dispatch } = useTable();

  useEffect(() => {
    dispatch(addCaption());
    return () => dispatch(deleteCaption());
  }, [dispatch]);

  return <caption {...rest}>{children}</caption>;
}

export const Caption = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <caption {...props}>{props.children}</caption>
  );
