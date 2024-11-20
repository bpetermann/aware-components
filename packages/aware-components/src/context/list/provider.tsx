import React from 'react';

export type ListContextType = {
  isList: boolean;
};

export const ListContext = React.createContext<ListContextType>({
  isList: false,
});

const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ListContext.Provider value={{ isList: true }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
