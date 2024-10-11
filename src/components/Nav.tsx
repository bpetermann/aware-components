import { useEffect } from 'react';
import { useAccessibility } from '../context/a11y';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  a11y?: boolean;
}

export function Nav(props: Props) {
  const { a11y, children, ...rest } = props;
  const { isCtx, navigations, registerNav } = useAccessibility();

  if (import.meta.env.DEV) {
    if (import.meta.env.DEV) useEffect(() => registerNav(), [isCtx]);
    if (isCtx)
      a11yChecks.nav(navigations, props)?.forEach((err) => console.warn(err));
  }

  return <nav {...rest}>{children}</nav>;
}
