import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addMain, deleteMain, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

function Development(props: Props) {
  const { children, ...rest } = props;
  const { mainAmount: amount, dispatch } = useAccessibility();

  useEffect(() => {
    dispatch(addMain());
    return () => dispatch(deleteMain());
  }, [dispatch]);

  if (amount > 1) a11yChecks.main(amount)?.forEach(warn);

  return <main {...rest}>{children}</main>;
}

export const Main = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <main {...props}>{props.children}</main>
  );
