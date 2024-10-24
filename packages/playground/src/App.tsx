import { A, A11yProvider, Button, H1 } from 'aware-components';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import { MyFieldset } from './components/MyFieldset';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <A11yProvider>
      <A href='#main'></A>
      <div>
        <A href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </A>
        <A href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </A>
      </div>
      <H1>Vite + React</H1>
      <div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <MyFieldset>
        <legend></legend>
      </MyFieldset>

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </A11yProvider>
  );
}

export default App;
