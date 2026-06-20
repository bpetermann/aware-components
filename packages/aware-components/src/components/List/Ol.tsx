import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import { useList } from '../../context/list/actions';
import ListProvider from '../../context/list/provider';
import { useA11yWarnings } from '../../hooks/useA11yWarnings';
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
  const { setBg } = useList();

  const bg = props.style?.backgroundColor;

  useEffect(() => {
    if (bg) setBg(bg);
  }, [bg, setBg]);

  useA11yWarnings(() => (a11y ? a11yChecks?.ol?.(props) : null), [props, a11y]);

  return <ol {...rest}>{children}</ol>;
}

export const Ol = (props: Props) =>
  DEVELOPMENT ? (
    <ListProvider>
      <Development {...props} />
    </ListProvider>
  ) : (
    <ol {...props}>{props.children}</ol>
  );
