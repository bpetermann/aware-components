import React from 'react';
import { DEVELOPMENT } from '../../constants';
import ListProvider from '../../context/list/provider';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export const Ul = (props: Props) =>
  DEVELOPMENT ? (
    <ListProvider>
      <ul {...props}>{props.children}</ul>
    </ListProvider>
  ) : (
    <ul {...props}>{props.children}</ul>
  );
