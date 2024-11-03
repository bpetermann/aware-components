import { isValidElement } from 'react';
import { CAPTIONS, TRACK, VIDEO } from '../../../constants';
import { getChildren } from '../../../helper/children';
import { messages } from '../../messages';
import { checkAutoPlay, checkControls, checkLoop } from '../media';

export type VideoProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

const checkSubtitles = ({ children }: VideoProps): string | null =>
  !getChildren(children)
    ?.filter((child) => isValidElement(child) && child.type === TRACK)
    .find(({ props }) => props?.kind === CAPTIONS)
    ? messages.video.captions
    : null;

export const videoChecks = (props: VideoProps): string[] =>
  [
    checkAutoPlay(props, VIDEO),
    checkControls(props, VIDEO),
    checkLoop(props, VIDEO),
    checkSubtitles(props),
  ].filter((check) => check !== null);
