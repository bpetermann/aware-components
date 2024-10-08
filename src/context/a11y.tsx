import React, { useContext, useState } from 'react';
import { messages } from '../utils/messages';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AccessibilityContextType = {
  headings: Heading[];
  registerHeading: (heading: Heading) => void;
};

export const AccessibilityContext =
  React.createContext<AccessibilityContextType>({
    headings: [],
    registerHeading: () => {
      throw new Error('registerHeading must be used within a A11yProvider');
    },
  });

const logError = (message: string) => console.error(message);

const A11yProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  const checkError = (heading: Heading) => {
    if (!headings.length) return;

    const isH1 = heading === 'h1';
    const prevTag = `h${+heading[1] - 1}` as Heading;

    if (
      (isH1 && headings.includes('h1')) ||
      (!isH1 && !headings.includes(prevTag))
    )
      logError(
        isH1 ? messages.heading.unique : messages.heading.skip + heading
      );
  };

  const registerHeading = (heading: Heading) => {
    checkError(heading);
    setHeadings((prev) => (prev.includes(heading) ? prev : [...prev, heading]));
  };

  return (
    <AccessibilityContext.Provider value={{ headings, registerHeading }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);

export default A11yProvider;
