import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  a11y?: boolean;
}

export function A(props: Props) {
  const { a11y, children, ...rest } = props;

  if (import.meta.env.DEV) {
    if (a11y) a11yChecks.anchor(props)?.forEach((err) => console.warn(err));
  }

  return <a {...rest}>{children}</a>;
}
