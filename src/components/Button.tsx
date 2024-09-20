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
    const warnings: string[] = [];

    if (a11y) warnings.push(...a11yChecks.button(props));

    warnings.forEach((warning) => console.warn(warning));
  }

  return <button {...rest}>{children}</button>;
}
