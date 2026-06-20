import React from 'react';
import { DEVELOPMENT } from '../constants';
import { useAccessibility } from '../context';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  a11y?: boolean;
  id: string;
}

export function Development(props: Props) {
  const { a11y = true, id, ...rest } = props;
  const { labels } = useAccessibility();

  useA11yWarnings(
    () => (a11y ? a11yChecks.input(props, labels) : null),
    [props, a11y, labels]
  );

  return <input {...rest} id={id} />;
}

export const Input = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <input {...props} />;
