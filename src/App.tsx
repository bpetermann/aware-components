import './App.css';
import reactLogo from './assets/react.svg';
import { A, Button, H1, H2, H5, Img, Section } from './components';

import A11yProvider from './context/a11y';
import viteLogo from '/vite.svg';

function App() {
  return (
    <A11yProvider>
      <H1 a11y>The page title</H1>
      <H1 a11y>The page title</H1>
      <H2>H2</H2>

      <H5>H2</H5>
      <Section aria-labelledby='test'>
        <h1>Hello</h1>
      </Section>
      <Section>
        <div>
          <>
            <p>Section2</p>
          </>
        </div>{' '}
      </Section>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button a11y style={{ padding: '12px' }}>
          <>
            <p>Click me!</p>
          </>
        </Button>
      </div>
      <div className='card'>
        <A href='mailto:john.doe@gmail.com' aria-hidden>
          <button>Hello</button>
        </A>
      </div>
      <a href='https://react.dev' target='_blank'>
        <Img src={reactLogo} className='logo react' alt='dsfdsfsd' a11y />
      </a>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </A11yProvider>
  );
}

export default App;
