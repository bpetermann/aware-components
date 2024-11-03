import { AUDIO, VIDEO } from '../../../constants';
import { messages } from '../../messages';
import { AudioProps } from '../audio';
import { VideoProps } from '../video';

const hasVisibleControls = (props: AudioProps) =>
  props.controls && props.style?.display !== 'none';

type MediaProps = AudioProps | VideoProps;
type MediaType = typeof AUDIO | typeof VIDEO;

export const checkAutoPlay = <T extends MediaProps>(
  props: T,
  type: MediaType
): string | null =>
  props.autoPlay && !props.muted ? messages[type].autoplay : null;

export const checkControls = <T extends MediaProps>(
  props: T,
  type: MediaType
): string | null =>
  !hasVisibleControls(props) ? messages[type].controls : null;

export const checkLoop = <T extends MediaProps>(
  props: T,
  type: MediaType
): string | null =>
  props.loop && props.autoPlay && !hasVisibleControls(props)
    ? messages[type].loop
    : null;
