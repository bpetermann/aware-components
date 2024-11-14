export type Scope = 'col' | 'row';

export type TableState = {
  header: Scope[];
};

export type TableAction = {
  type: string;
  scope?: Scope;
};

export type TableContextType = TableState & {
  dispatch: React.Dispatch<TableAction>;
};
