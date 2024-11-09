import React from 'react';
import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  a11y?: boolean;
}

export function Table(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.table(props)?.forEach(warn);

  return <table {...rest}>{children}</table>;
}
