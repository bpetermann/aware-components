import { useEffect } from 'react';
import { addNav, deleteNav, useAccessibility } from '../context';
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
  const { navigations, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addNav());
      return () => dispatch(deleteNav());
    }, []);

    if (navigations) a11yChecks.nav(props)?.forEach((err) => console.warn(err));
  }

  return <nav {...rest}>{children}</nav>;
}
