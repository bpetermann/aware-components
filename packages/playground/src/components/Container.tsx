import { Div } from 'aware-components';

export function Container(props: React.PropsWithChildren) {
  return (
    <Div>
      <Div>
        <div>
          <Div>
            <div>{props.children}</div>
          </Div>
        </div>
      </Div>
    </Div>
  );
}
