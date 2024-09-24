import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  a11y?: boolean;
}

export function Button(props: Props) {
  const { a11y, children, ...rest } = props;

  if (import.meta.env.DEV) {
    if (a11y) a11yChecks.button(props)?.forEach((err) => console.warn(err));
  }

  return <button {...rest}>{children}</button>;
}
