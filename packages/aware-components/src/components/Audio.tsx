import React, { useRef } from 'react';
import { DEVELOPMENT } from '../constants';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;
  const ref = useRef(null);

  useA11yWarnings(
    () => (a11y && ref.current ? a11yChecks.audio(props, ref.current) : null),
    [props, a11y]
  );

  return (
    <audio ref={ref} {...rest}>
      {children}
    </audio>
  );
}

export const Audio = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <audio {...props} />;
