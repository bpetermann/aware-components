import { useA11yWarnings } from '../hooks/useA11yWarnings';
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

  useA11yWarnings(() => (a11y ? a11yChecks.button(props) : null), [props, a11y]);

  return <button {...rest}>{children}</button>;
}
