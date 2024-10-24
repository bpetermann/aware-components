import { Fieldset } from 'aware-components';

export function MyFieldset(props: React.PropsWithChildren) {
  return (
    <Fieldset>
      <>
        <>{props.children}</>
      </>
    </Fieldset>
  );
}
