import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import { useList } from '../../context/list/actions';
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
  const { setBg } = useList();

  const foo = props.style?.backgroundColor;

  useEffect(() => {
    if (foo) setBg(foo);
  }, [foo, setBg]);

  if (a11y) a11yChecks?.ul?.(props)?.forEach(warn);

  return <ul {...rest}>{children}</ul>;
}

export const Ul = (props: Props) =>
  DEVELOPMENT ? (
    <ListProvider>
      <Development {...props} />
    </ListProvider>
  ) : (
    <ul {...props}>{props.children}</ul>
  );
