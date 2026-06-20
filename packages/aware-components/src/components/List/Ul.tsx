import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import { useList } from '../../context/list/actions';
import ListProvider from '../../context/list/provider';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
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

  useA11yWarnings(() => (a11y ? a11yChecks?.ul?.(props) : null), [props, a11y]);

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
