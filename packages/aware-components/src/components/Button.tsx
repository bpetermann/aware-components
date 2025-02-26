import { DEVELOPMENT } from '../constants';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  a11y?: boolean;
}

export function Button(props: Props) {
  const { a11y = true, children, ...rest } = props;

  if (DEVELOPMENT && a11y) a11yChecks.button(props)?.forEach(warn);

  return <button {...rest}>{children}</button>;
}
