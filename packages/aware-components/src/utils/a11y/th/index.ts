import { Scope } from '../../../context/table/types';
import { isMultiHeaderTable, isTwoHeadingTable } from '../../../helper/tables';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export const thChecks = (props: Props, header: Scope[]): string[] => [
  ...(isTwoHeadingTable(header) && !(props.scope || props.headers)
    ? [`${messages.th.two}"${props.children || ''}"`]
    : []),
  ...(isMultiHeaderTable(header) &&
  (!props.id || !(props.scope || props.headers))
    ? [`${messages.th.multi}"${props.children || ''}"`]
    : []),
];
