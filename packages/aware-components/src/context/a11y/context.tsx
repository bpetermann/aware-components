import { createContext, useContext } from 'react';
import { A11yContextType } from './types';

export const AccessibilityContext = createContext<A11yContextType>({
  headings: [],
  sections: 0,
  navigations: 0,
  mainAmount: 0,
  dispatch: () => null,
});

export const useAccessibility = () => useContext(AccessibilityContext);
