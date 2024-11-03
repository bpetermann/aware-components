import { P } from 'aware-components';

export function BoldText(props: React.PropsWithChildren) {
  return (
    <P style={{ fontSize: 24, backgroundColor: '#000', color: '#333' }}>
      <b>{props.children}</b>
    </P>
  );
}
