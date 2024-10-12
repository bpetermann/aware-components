import { useEffect } from 'react';
import { addSection, deleteSection, useAccessibility } from '../context';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Section(props: Props) {
  const { children, ...rest } = props;
  const { sections, dispatch } = useAccessibility();

  if (import.meta.env.DEV) {
    useEffect(() => {
      dispatch(addSection());
      return () => dispatch(deleteSection());
    }, []);

    if (sections)
      a11yChecks.section(props)?.forEach((err) => console.warn(err));
  }

  return <section {...rest}>{children}</section>;
}