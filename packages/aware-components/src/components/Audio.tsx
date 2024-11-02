import React, { useEffect, useRef } from 'react';
import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
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

  useEffect(() => {
    if (DEVELOPMENT && a11y && ref.current)
      a11yChecks.audio(props, ref.current)?.forEach(warn);
  }, [a11y, props]);

  return (
    <audio ref={ref} {...rest}>
      {children}
    </audio>
  );
}

export const Audio = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <audio {...props} />;
