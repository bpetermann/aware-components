import { TH } from '../../../constants';
import { Scope } from '../../../context/table/types';
import { isMultiHeadingTable, isTwoHeadingTable } from '../../../helper/tables';
import { messages } from '../../messages';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export const thChecks = (props: Props, header: Scope[]): string[] =>
  [
    ...(isTwoHeadingTable(header) && !(props.scope || props.headers)
      ? [`${messages.th.two}"${props.children || ''}"`]
      : []),
    ...(isMultiHeadingTable(header) &&
    (!props.id || !(props.scope || props.headers))
      ? [`${messages.th.multi}"${props.children || ''}"`]
      : []),
    checkColorContrast(props, TH),
  ].filter((check) => check !== null);
