import { useA11yWarnings } from '../hooks/useA11yWarnings';
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

  useA11yWarnings(() => (a11y ? a11yChecks.img(props) : null), [props, a11y]);

  return <img {...rest} />;
}
