import React from 'react';
import { DEVELOPMENT } from '../constants';
import { useAccessibility } from '../context';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  a11y?: boolean;
  id: string;
}

export function Development(props: Props) {
  const { a11y = true, id, children, ...rest } = props;
  const { labels } = useAccessibility();

  useA11yWarnings(
    () => (a11y ? a11yChecks.textarea(props, labels) : null),
    [props, a11y, labels]
  );

  return (
    <textarea {...rest} id={id}>
      {children}
    </textarea>
  );
}

export const Textarea = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <textarea {...props}>{props.children}</textarea>
  );
