import { messages } from '../../messages';

type AudioProps = React.DetailedHTMLProps<
  React.AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
>;

const TRANSCRIPT_KEYWORDS = ['transcript', 'text', 'description', 'summary'];

const hasVisibleControls = (props: AudioProps) =>
  props.controls && props.style?.display !== 'none';

const hasAriaDescribedBy = (element: HTMLAudioElement) =>
  element.getAttribute('aria-describedby');

const hasTranscriptSibling = ({ parentNode }: HTMLAudioElement) =>
  Array.from(parentNode?.children || []).some((sibling) =>
    TRANSCRIPT_KEYWORDS.some((keyword) =>
      (sibling.textContent?.toLowerCase() || '').includes(keyword)
    )
  );

export const checkAutoPlay = (props: AudioProps): string | null =>
  props.autoPlay && !props.muted ? messages.audio.autoplay : null;

export const checkControls = (props: AudioProps): string | null =>
  !hasVisibleControls(props) ? messages.audio.controls : null;

export const checkLoop = (props: AudioProps): string | null =>
  props.loop && props.autoPlay && !hasVisibleControls(props)
    ? messages.audio.loop
    : null;

const checkTranscript = (element: HTMLAudioElement): string | null =>
  hasAriaDescribedBy(element) || hasTranscriptSibling(element)
    ? null
    : messages.audio.transcript;

export const audioChecks = (
  props: AudioProps,
  element: HTMLAudioElement
): string[] =>
  [
    checkAutoPlay(props),
    checkControls(props),
    checkLoop(props),
    checkTranscript(element),
  ].filter((check) => check !== null);
