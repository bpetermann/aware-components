import { A11yProvider, Button, Div, H1 } from 'aware-components';
import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <A11yProvider>
      <Div>
        <Div>
          <Div>
            <Div>
              <Div>
                <Div>
                  <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} className='logo' alt='Vite logo' />
                  </a>
                  <a href='https://react.dev' target='_blank'>
                    <img
                      src={reactLogo}
                      className='logo react'
                      alt='React logo'
                    />
                  </a>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <H1>Vite + React</H1>
      <Div className='card'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </A11yProvider>
  );
}

export default App;
