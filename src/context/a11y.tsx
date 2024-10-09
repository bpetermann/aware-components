import React, { useContext, useState } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AccessibilityContextType = {
  headings: Heading[];
  registerHeading: (heading: Heading) => void;
  registerSection: () => void;
};

export const AccessibilityContext =
  React.createContext<AccessibilityContextType>({
    headings: [],
    registerHeading: () => {},
    registerSection: () => {},
  });

const A11yProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [sections, setSections] = useState<number>(0);

  const registerHeading = (heading: Heading) =>
    setHeadings((prev) =>
      heading !== 'h1' && prev.includes(heading) ? prev : [...prev, heading]
    );

  const registerSection = () => setSections(sections + 1);

  return (
    <AccessibilityContext.Provider
      value={{ headings, registerHeading, registerSection }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);

export default A11yProvider;
