import { A11yProvider, Button, Div, Main, P } from 'aware-components';
import { useState } from 'react';
import './App.css';
import { FoodSelect } from './components/FoodSelect';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { SkipLink } from './components/SkipLink';
import { MultiHeaderTable } from './components/Tables/MultiHeaderTable';
import { TermsAndConditions } from './components/TermsAndConditions';

function App() {
  const [count, setCount] = useState(0);

  return (
    <A11yProvider>
      <SkipLink />
      <Main>
        <Logo />
        <Heading />
        <Div>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <P>
            Edit <code>src/App.tsx</code> and save to test HMR
          </P>
        </Div>
      </Main>
      <TermsAndConditions />
      <FoodSelect />

      <MultiHeaderTable />
    </A11yProvider>
  );
}

export default App;
