import React from 'react';
import { DEVELOPMENT } from '../constants';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  a11y?: boolean;
}

export function Development(props: Props) {
  const { a11y = true, children, ...rest } = props;

  useA11yWarnings(() => (a11y ? a11yChecks.video(props) : null), [props, a11y]);

  return <video {...rest}>{children}</video>;
}

export const Video = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <video {...props} />;
