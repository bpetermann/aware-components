import { A, A11yProvider, Button, Div, H1, H3 } from 'aware-components';
import React from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <A11yProvider>
      <Headings />
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
<<<<<<< Updated upstream
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
=======
>>>>>>> Stashed changes
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Div>
<<<<<<< Updated upstream
        <Div>
          <div>
            <Div>
              <Div>
                <Div>Hello</Div>
              </Div>
            </Div>
          </div>
        </Div>
=======
        <MyButton />
>>>>>>> Stashed changes
      </Div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </A11yProvider>
  );
}

export default App;

function MyButton() {
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

function Headings() {
  return (
    <>
      <H1>Guide to cooking</H1>
      <H1>Basics of cooking</H1>
      <H3>Choosing the right flour</H3>
      <H3>Essential cooking tools</H3>
    </>
  );
}
