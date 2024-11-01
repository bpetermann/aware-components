import { A11yProvider, Button, Main, P } from 'aware-components';
import { useState } from 'react';
import './App.css';
import { BoldText } from './components/BoldText';
import { Container } from './components/Container';
import { FoodSelect } from './components/FoodSelect';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
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
        <Container>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <P>
            Edit <code>src/App.tsx</code> and save to test HMR
          </P>
          <BoldText>Should be a header</BoldText>
        </Container>
      </Main>
      <TermsAndConditions />
      <FoodSelect />
    </A11yProvider>
  );
}

export default App;
