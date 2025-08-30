export interface Column<T> {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => React.ReactNode;
}
