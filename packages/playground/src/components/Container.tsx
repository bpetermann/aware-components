import { Div } from 'aware-components';

export function Container(props: React.PropsWithChildren) {
  return (
    <Div>
      <Div>
        <div>
          <Div>
            <Div>{props.children}</Div>
          </Div>
        </div>
      </Div>
    </Div>
  );
}
