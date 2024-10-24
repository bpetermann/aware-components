import { A, A11yProvider, Button, Div, H1, H3 } from 'aware-components';
import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  return (
    <A11yProvider>
      <Headings />
      <A href='#main'></A>
      <div>
        <A href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </A>
        <A href='https://react.dev' target='_blank' aria-hidden>
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

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </A11yProvider>
  );
}

export default App;

export function Container(props: React.PropsWithChildren) {
  return (
    <Div>
      <Div>
        <div>
          <Div>
            <Div>{props.children}</Div>
          </Div>
        </div>
      </Div>
    </Div>
  );
}

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
