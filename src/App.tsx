import './App.css';
import reactLogo from './assets/react.svg';
import {
  A,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  Nav,
  Section,
} from './components';
import { Main } from './components/Main';
import { A11yProvider } from './context';

function App() {
  return (
    <A11yProvider>
      <Main>
        <H1>H1</H1>
        <H2>H2</H2>
        <H3>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>

        <Section>Section 1</Section>

        <Nav>Nav 1</Nav>

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
          <Img src={reactLogo} className='logo react' alt='logo react' a11y />
        </a>
      </Main>
      <Main></Main>
    </A11yProvider>
  );
}

export default App;
