import './App.css';
import reactLogo from './assets/react.svg';
import { A } from './components/A';
import { Button } from './components/Button';
import { Img } from './components/Img';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
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
      {/* <Div a11y>
        <>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <p>Hello, World</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </>
      </Div> */}
      <a href='https://react.dev' target='_blank'>
        <Img src={reactLogo} className='logo react' alt='click' a11y />
      </a>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
