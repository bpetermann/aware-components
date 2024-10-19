import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addSection, deleteSection, useAccessibility } from '../context';
import { warn } from '../helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Section(props: Props) {
  const { children, ...rest } = props;
  const { sections: amount, dispatch } = useAccessibility();

  useEffect(() => {
    if (DEVELOPMENT) {
      dispatch(addSection());
      return () => dispatch(deleteSection());
    }
  }, [dispatch]);

  if (DEVELOPMENT && amount > 1) a11yChecks.section(props)?.forEach(warn);

  return <section {...rest}>{children}</section>;
}
