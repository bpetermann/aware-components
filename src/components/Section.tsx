import { useEffect } from 'react';
import { useAccessibility } from '../context/a11y';
import { a11yChecks } from '../utils/a11y';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Section(props: Props) {
  const { children, ...rest } = props;
  const { isCtx, sections, registerSection } = useAccessibility();

  if (import.meta.env.DEV) {
    if (import.meta.env.DEV) useEffect(() => registerSection(), [isCtx]);
    if (isCtx)
      a11yChecks.section(sections, props)?.forEach((err) => console.warn(err));
  }

  return <section {...rest}>{children}</section>;
}
