import { Div } from 'aware-components';

export function Container(props: React.PropsWithChildren) {
  return (
    <Div>
      <Div>
        <div>
          <Div>
            <Div>
              <Div>{props.children}</Div>
            </Div>
          </Div>
        </div>
      </Div>
    </Div>
  );
}
