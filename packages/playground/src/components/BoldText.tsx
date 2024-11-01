import { P } from 'aware-components';

export function BoldText(props: React.PropsWithChildren) {
  return (
    <P style={{ fontSize: 6 }}>
      <b>{props.children}</b>
    </P>
  );
}
