import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../../constants';
import { useList } from '../../context/list/actions';
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
  const { setBg } = useList();

  const bg = props.style?.backgroundColor;

  useEffect(() => {
    if (bg) setBg(bg);
  }, [bg, setBg]);

  if (a11y) a11yChecks?.ol?.(props)?.forEach(warn);

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
