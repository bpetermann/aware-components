import { render as rtlRender } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { A11yProvider } from '../../context/index';

function customRender(ui: ReactElement) {
  return rtlRender(<A11yProvider>{ui}</A11yProvider>);
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { customRender as render };
