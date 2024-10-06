import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  a11y?: boolean;
}

export function Div(props: Props) {
  const { a11y, children, ...rest } = props;

  if (import.meta.env.DEV) {
    if (a11y) a11yChecks.div(props)?.forEach((err) => console.warn(err));
  }

  return <div {...rest}>{children}</div>;
}