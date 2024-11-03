import { A11yProvider, Button, Div, Main, P } from 'aware-components';
import { useState } from 'react';
import './App.css';
import { FoodSelect } from './components/FoodSelect';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { MyAudio } from './components/MyAudio';
import { SkipLink } from './components/SkipLink';
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
        <MyAudio />
      </Main>
      <TermsAndConditions />
      <FoodSelect />
    </A11yProvider>
  );
}

export default App;
