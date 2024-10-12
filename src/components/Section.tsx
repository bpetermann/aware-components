import { useEffect } from 'react';
import { addSection, deleteSection, useAccessibility } from '../context';
import { warn } from '../test/helper/consoleWarn';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Section(props: Props) {
  const { children, ...rest } = props;
  const { sections: amount, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addSection());
      return () => dispatch(deleteSection());
    }, []);

    if (amount > 1) a11yChecks.section(props)?.forEach(warn);
  }

  return <section {...rest}>{children}</section>;
}
