import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  a11y?: boolean;
}

export function Div(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.div(props)?.forEach(warn);

  return <div {...rest}>{children}</div>;
}
