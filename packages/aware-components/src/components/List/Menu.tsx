import React from 'react';
import { DEVELOPMENT } from '../../constants';
import ListProvider from '../../context/list/provider';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLMenuElement>,
  HTMLMenuElement
>;

export const Menu = (props: Props) =>
  DEVELOPMENT ? (
    <ListProvider>
      <menu {...props}>{props.children}</menu>
    </ListProvider>
  ) : (
    <menu {...props}>{props.children}</menu>
  );
