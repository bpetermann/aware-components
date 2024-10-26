import { ARIA_LABELLEDBY, TEXTAREA } from '../../../constants';
import { messages } from '../../messages';
import { checkColorContrast } from '../style/checkColorContrast';

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const checkLabel = (
  props: TextareaProps,
  labels: string[]
): string | null =>
  !labels.includes(props.id || '') && !props[ARIA_LABELLEDBY]
    ? `${messages.textarea.label}"${props?.id || ''}"`
    : null;

export const textareaChecks = (
  props: TextareaProps,
  labels: string[]
): string[] =>
  [checkLabel(props, labels), checkColorContrast(props, TEXTAREA)].filter(
    (check) => check !== null
  );
