import { Scope } from '../../../context/table/types';
import { isMultiHeadingTable } from '../../../helper/tables';
import { messages } from '../../messages';

type Props = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

const warning = ({ children }: Props) =>
  `${messages.td.multi}"${children || ''}"`;

export const tdChecks = (props: Props, header: Scope[]): string[] => [
  ...(isMultiHeadingTable(header) &&
  (props.children || Object.keys(props).length) &&
  !props.headers
    ? [warning(props)]
    : []),
];
