import React from 'react';
import { DEVELOPMENT } from '../constants';
import { useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  a11y?: boolean;
  id: string;
}

export function Development(props: Props) {
  const { a11y = true, id, ...rest } = props;
  const { labels } = useAccessibility();

  if (a11y) a11yChecks.select(props, labels)?.forEach(warn);

  return (
    <select {...rest} id={id}>
      {props.children}
    </select>
  );
}

export const Select = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <select {...props}>{props.children}</select>
  );
