export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type A11yState = {
  headings: Heading[];
  sections: number;
  navigations: number;
  mainAmount: number;
};

export type A11yAction = { type: string; tag?: Heading };

export type A11yContextType = A11yState & {
  dispatch: React.Dispatch<A11yAction>;
};
