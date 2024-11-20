import React from 'react';
import { DEVELOPMENT } from '../../constants';
import ListProvider from '../../context/list/provider';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export const Ol = (props: Props) =>
  DEVELOPMENT ? (
    <ListProvider>
      <ol {...props}>{props.children}</ol>
    </ListProvider>
  ) : (
    <ol {...props}>{props.children}</ol>
  );
