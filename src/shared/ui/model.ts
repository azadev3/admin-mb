export interface Column<T> {
  header: string;
  accessor: any;
  cell?: (row: T) => React.ReactNode;
}
