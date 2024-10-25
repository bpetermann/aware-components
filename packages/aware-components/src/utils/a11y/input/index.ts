import { ARIA_LABELLEDBY } from '../../../constants';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const inputChecks = (props: Props, labels: string[]): string[] => [
  ...(!labels.includes(props.id || '') && !props[ARIA_LABELLEDBY]
    ? [`${messages.input.label}"${props?.id || ''}"`]
    : []),
];
