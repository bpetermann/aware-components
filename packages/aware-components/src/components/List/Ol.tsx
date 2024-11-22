import React from 'react';
import { DEVELOPMENT } from '../../constants';
import ListProvider from '../../context/list/provider';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  > {
  a11y?: boolean;
}

function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (a11y) a11yChecks?.ol?.(props)?.forEach(warn);

  return (
    <ListProvider>
      <ol {...rest}>{children}</ol>
    </ListProvider>
  );
}

export const Ol = (props: Props) =>
  DEVELOPMENT ? <Development /> : <ol {...props}>{props.children}</ol>;
