import React from 'react';
import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
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

  if (DEVELOPMENT && a11y) a11yChecks.video(props)?.forEach(warn);

  return <video {...rest}>{children}</video>;
}

export const Video = (props: Props) =>
  DEVELOPMENT ? <Development {...props} /> : <video {...props} />;
