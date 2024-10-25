import { A } from 'aware-components';
import '../App.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

export function Logo() {
  return (
    <div>
      <A href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </A>
      <A href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </A>
    </div>
  );
}
