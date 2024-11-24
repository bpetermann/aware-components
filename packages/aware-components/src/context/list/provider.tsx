import React, { useState } from 'react';

export type ListContextType = {
  isList: boolean;
  bg: string | undefined;
  setBg: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const ListContext = React.createContext<ListContextType>({
  isList: false,
  bg: undefined,
  setBg: () => {},
});

const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [bg, setBg] = useState<string>();

  return (
    <ListContext.Provider value={{ bg, setBg, isList: true }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
