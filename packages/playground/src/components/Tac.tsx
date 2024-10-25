import { Input, Label } from 'aware-components';
import { useState } from 'react';

export function Tac() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Label htmlFor='tac'>
        <Input
          id='tac'
          type='checkbox'
          name='terms-and-conditions'
          onClick={() => setChecked((prev) => !prev)}
        />
        I agree to the Terms and Conditions
      </Label>
      <p>
        <a href='terms-and-conditions.html'>Read our Terms and Conditions</a>
      </p>
      <p>{`Your ${checked ? 'have agreed' : 'have not agreed'}`}</p>
    </>
  );
}
