import React, { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addHr, deleteHr, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
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

  if (hrAmount > 3 && a11y) warn(messages.hr.amount);

  return <hr {...rest} />;
}

export const HR = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <hr {...props} />;
