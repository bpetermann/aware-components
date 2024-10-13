import { warn } from '../test/helper/consoleWarn';
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

  if (import.meta.env.DEV) {
    if (a11y) a11yChecks.img(props)?.forEach(warn);
  }

  return <img {...rest} />;
}
