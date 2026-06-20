import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { addSection, deleteSection, useAccessibility } from '../context';
import { useA11yWarnings } from '../hooks/useA11yWarnings';
import { a11yChecks } from '../utils/a11y';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Development(props: Props) {
  const { children, ...rest } = props;
  const { sections: amount, dispatch } = useAccessibility();

  useEffect(() => {
    dispatch(addSection());
    return () => dispatch(deleteSection());
  }, [dispatch]);

  useA11yWarnings(
    () => (amount > 1 ? a11yChecks.section(props) : null),
    [props, amount]
  );

  return <section {...rest}>{children}</section>;
}

export const Section = (props: Props) =>
  DEVELOPMENT ? (
    <Development {...props} />
  ) : (
    <section {...props}>{props.children}</section>
  );
