import React, { useContext, useState } from 'react';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AccessibilityContextType = {
  headings: Heading[];
  registerHeading: (heading: Heading) => void;
  sections: number;
  registerSection: () => void;
  isCtx: boolean;
};

export const AccessibilityContext =
  React.createContext<AccessibilityContextType>({
    headings: [],
    registerHeading: () => {},
    sections: 0,
    registerSection: () => {},
    isCtx: false,
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
      value={{
        isCtx: true,
        headings,
        registerHeading,
        registerSection,
        sections,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);

export default A11yProvider;
