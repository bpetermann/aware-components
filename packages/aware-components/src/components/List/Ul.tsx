import React from 'react';
import { DEVELOPMENT } from '../../constants';
import ListProvider from '../../context/list/provider';
import { warn } from '../../helper/consoleWarn';
import { a11yChecks } from '../../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  a11y?: boolean;
}

function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (a11y) a11yChecks?.ul?.(props)?.forEach(warn);

  return (
    <ListProvider>
      <ul {...rest}>{children}</ul>
    </ListProvider>
  );
}

export const Ul = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <ul {...props}>{props.children}</ul>
  );
