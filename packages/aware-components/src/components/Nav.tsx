import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addNav, deleteNav, useAccessibility } from '../context';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

function Development(props: Props) {
  const { children, ...rest } = props;
  const { navigations: amount, dispatch } = useAccessibility();

  useEffect(() => {
    dispatch(addNav());
    return () => dispatch(deleteNav());
  }, [dispatch]);

  useA11yWarnings(
    () => (amount > 1 ? a11yChecks.nav(props) : null),
    [props, amount]
  );

  return <nav {...rest}>{children}</nav>;
}

export const Nav = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <nav {...props}>{props.children}</nav>
  );
