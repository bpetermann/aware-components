import { AUDIO } from '../../../constants';
import { messages } from '../../messages';
import { checkAutoPlay, checkControls, checkLoop } from '../media';

export type AudioProps = React.DetailedHTMLProps<
  React.AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
>;

const TRANSCRIPT_KEYWORDS = ['transcript', 'text', 'description', 'summary'];

const hasAriaDescribedBy = (element: HTMLAudioElement) =>
  element.getAttribute('aria-describedby');

const hasTranscriptSibling = ({ parentNode }: HTMLAudioElement) =>
  Array.from(parentNode?.children || []).some((sibling) =>
    TRANSCRIPT_KEYWORDS.some((keyword) =>
      (sibling.textContent?.toLowerCase() || '').includes(keyword)
    )
  );

const checkTranscript = (element: HTMLAudioElement): string | null =>
  hasAriaDescribedBy(element) || hasTranscriptSibling(element)
    ? null
    : messages.audio.transcript;

export const audioChecks = (
  props: AudioProps,
  element: HTMLAudioElement
): string[] =>
  [
    checkAutoPlay(props, AUDIO),
    checkControls(props, AUDIO),
    checkLoop(props, AUDIO),
    checkTranscript(element),
  ].filter((check) => check !== null);
