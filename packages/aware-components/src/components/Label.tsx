import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addLabel, deleteLabel, useAccessibility } from '../context';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor: string;
}

export function Development(props: Props) {
  const { children, htmlFor, ...rest } = props;
  const { dispatch } = useAccessibility();

  useEffect(() => {
    dispatch(addLabel(htmlFor));
    return () => dispatch(deleteLabel(htmlFor));
  }, [dispatch, htmlFor]);

  return (
    <label {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export const Label = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <label {...props} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
