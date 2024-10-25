import { A11yProvider, Button, Main } from 'aware-components';
import { useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { Headings } from './components/Headings';
import { Logo } from './components/Logo';
import { SkipLink } from './components/SkipLink';

function App() {
  const [count, setCount] = useState(0);

  return (
    <A11yProvider>
      <SkipLink />
      <Main>
        <Logo />
        <Headings />
        <Container>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </Container>
      </Main>
      <Main></Main>
    </A11yProvider>
  );
}

export default App;
