import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  a11y?: boolean;
}

export function Img(props: Props) {
  const { a11y = true, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.img(props)?.forEach(warn);

  return <img {...rest} />;
}
