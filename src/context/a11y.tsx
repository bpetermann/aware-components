import React, { useContext, useState } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AccessibilityContextType = {
  headings: Heading[];
  registerHeading: (heading: Heading) => void;
};

export const AccessibilityContext =
  React.createContext<AccessibilityContextType>({
    headings: [],
    registerHeading: () => {},
  });

const A11yProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const registerHeading = (heading: Heading) =>
    setHeadings((prev) => [...prev, heading]);

  return (
    <AccessibilityContext.Provider value={{ headings, registerHeading }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);

export default A11yProvider;
