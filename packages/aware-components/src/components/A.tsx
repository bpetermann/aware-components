import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addLink, deleteLink, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  a11y?: boolean;
}

export function A(props: Props) {
  const { a11y = true, children, ...rest } = props;
  const { links, dispatch } = useAccessibility();

  useEffect(() => {
    if (DEVELOPMENT) {
      dispatch(addLink(props.href));
      return () => dispatch(deleteLink(props.href));
    }
  }, [dispatch, props.href]);

  if (DEVELOPMENT && a11y) a11yChecks.anchor(props, links)?.forEach(warn);

  return <a {...rest}>{children}</a>;
}
