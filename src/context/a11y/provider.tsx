import React, { useReducer } from 'react';
import { AccessibilityContext } from './context';
import { a11yReducer, initialState } from './reducer';

const A11yProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(a11yReducer, initialState);

  return (
    <AccessibilityContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export default A11yProvider;
