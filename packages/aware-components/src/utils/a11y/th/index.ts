import { Scope } from '../../../context/table/types';
import { hasMultiLevelHeader, hasTwoLevelHeader } from '../../../helper/tables';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export const thChecks = (props: Props, header: Scope[]): string[] => [
  ...(hasTwoLevelHeader(header) && !(props.scope || props.headers)
    ? [`${messages.th.two}"${props.children}"`]
    : []),
  ...(hasMultiLevelHeader(header) &&
  (!props.id || !(props.scope || props.headers))
    ? [`${messages.th.multi}"${props.children}"`]
    : []),
];
