import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addHr, deleteHr, useAccessibility } from '../context';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { messages } from '../utils/messages';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { hrAmount, dispatch } = useAccessibility();
  const { a11y = true, ...rest } = props;

  useEffect(() => {
    dispatch(addHr());
    return () => dispatch(deleteHr());
  }, [dispatch]);

  useA11yWarnings(
    () => (hrAmount > 3 && a11y ? [messages.hr.amount] : null),
    [hrAmount, a11y]
  );

  return <hr {...rest} />;
}

export const Hr = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <hr {...props} />;
