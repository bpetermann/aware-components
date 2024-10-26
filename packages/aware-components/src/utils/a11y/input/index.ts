import { ARIA_LABELLEDBY, INPUT } from '../../../constants';
import { messages } from '../../messages';
import { checkColorContrast } from '../style/checkColorContrast';

type InputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const checkLabel = (
  props: InputProps,
  labels: string[]
): string | null =>
  !labels.includes(props.id || '') && !props[ARIA_LABELLEDBY]
    ? `${messages.input.label}"${props?.id || ''}"`
    : null;

export const inputChecks = (props: InputProps, labels: string[]): string[] =>
  [checkLabel(props, labels), checkColorContrast(props, INPUT)].filter(
    (check) => check !== null
  );
