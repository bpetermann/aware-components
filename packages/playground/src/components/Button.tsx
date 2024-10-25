import { Button, Div } from 'aware-components';
import React from 'react';

export function MyButton() {
  const [, setCount] = React.useState(0);

  return (
    <Div>
      <Button
        style={{
          backgroundColor: '#000',
          color: '#333',
          width: '1em',
        }}
        onClick={() => setCount((count) => count + 1)}
      ></Button>
    </Div>
  );
}
