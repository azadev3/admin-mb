export interface CreateButtonProps {
  createButtonLocation: string;
  onRefresh: () => void;
  dataLoading: boolean;
}

export interface DeleteButtonProps {
  item: any;
  refetch?: () => void;
  onDelete?: (item: any) => void;
}

export interface EditButtonProps<T = any> {
  item: T;
  editButtonLocation?: (item: T) => string;
  onEdit: (item: T) => void;
}
