import { A11yProvider, Button, Div, Main, P } from 'aware-components';
import { useState } from 'react';
import './App.css';
import { FoodSelect } from './components/FoodSelect';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { SkipLink } from './components/SkipLink';
import { HalfAwareTable } from './components/Tables/HalfAwareTable';
import { TwoHeaderTable } from './components/Tables/TwoHeaderTable';
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
      <TwoHeaderTable />
      <HalfAwareTable />
    </A11yProvider>
  );
}

export default App;
