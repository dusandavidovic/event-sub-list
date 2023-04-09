export interface IColumn {
  label: string;
  key: string;
}

export interface IFilter {
  columnKey: string;
  value: string;
  add?: boolean;
}
