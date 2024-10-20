import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  a11y?: boolean;
}

export function A(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.anchor(props)?.forEach(warn);

  return <a {...rest}>{children}</a>;
}
