import { useEffect } from 'react';
import { addNav, deleteNav, useAccessibility } from '../context';
import { warn } from '../test/helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Nav(props: Props) {
  const { children, ...rest } = props;
  const { navigations: amount, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addNav());
      return () => dispatch(deleteNav());
    }, []);

    if (amount > 1) a11yChecks.nav(props)?.forEach(warn);
  }

  return <nav {...rest}>{children}</nav>;
}
