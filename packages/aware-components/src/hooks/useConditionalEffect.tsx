import { useEffect } from 'react';
import { DEVELOPMENT } from '../constants';
import { A11yAction } from '../context/a11y/types';

export const useConditionalEffect = (
  callback: () => void,
  deps: React.Dispatch<A11yAction>
) =>
  useEffect(() => {
    if (DEVELOPMENT) {
      callback();
    }
  }, [deps]);
