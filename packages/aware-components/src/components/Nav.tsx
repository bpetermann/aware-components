import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addNav, deleteNav, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

function Dev(props: Props) {
  const { children, ...rest } = props;
  const { navigations: amount, dispatch } = useAccessibility();

  useEffect(() => {
    dispatch(addNav());
    return () => dispatch(deleteNav());
  }, [dispatch]);

  if (amount > 1) a11yChecks.nav(props)?.forEach(warn);

  return <nav {...rest}>{children}</nav>;
}

function Pro(props: Props) {
  return <nav {...props}>{props.children}</nav>;
}

export const Nav = (props: Props) =>
  DEVELOPMENT ? <Dev {...props} /> : <Pro {...props} />;
