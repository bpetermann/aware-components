import { LI } from '../../../constants';
import { messages } from '../../messages';
import { checkColorContrast } from '../style/checkColorContrast';

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export const liChecks = (
  props: Props,
  isInsideList: boolean,
  bgColor: string | undefined
) =>
  [
    ...(!isInsideList ? [messages.li.list] : []),
    checkColorContrast(props, LI, bgColor),
  ].filter((check) => check !== null);
