import { useEffect } from 'react';
import { addMain, deleteMain, useAccessibility } from '../context';
import { warn } from '../test/helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  a11y?: boolean;
}

export function Main(props: Props) {
  const { a11y, children, ...rest } = props;
  const { mainAmount: amount, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addMain());
      return () => dispatch(deleteMain());
    }, []);

    if (amount > 1) a11yChecks.main(amount)?.forEach(warn);
  }

  return <main {...rest}>{children}</main>;
}
