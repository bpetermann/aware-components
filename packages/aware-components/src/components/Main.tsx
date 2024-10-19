import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addMain, deleteMain, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  a11y?: boolean;
}

export function Main(props: Props) {
  const { a11y = true, children, ...rest } = props;
  const { mainAmount: amount, dispatch } = useAccessibility();

  if (DEVELOPMENT) {
    useEffect(() => {
      dispatch(addMain());
      return () => dispatch(deleteMain());
    }, []);

    if (amount > 1) a11yChecks.main(amount)?.forEach(warn);
  }

  return <main {...rest}>{children}</main>;
}
