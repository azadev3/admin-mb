import { Button } from '@chakra-ui/react';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  setDeleteModalItem,
  setDeleteModalVisible,
} from '../../../../store/features/uiSlice';
import type { DeleteButtonProps } from './model';

const DeleteButton: React.FC<DeleteButtonProps> = ({
  item,
  refetch,
  onDelete,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (onDelete) onDelete(item);
    dispatch(setDeleteModalItem({ ...item, refetch }));
    dispatch(setDeleteModalVisible(true));
  };

  return (
    <Button
      onClick={handleClick}
      size="sm"
      colorScheme="red"
      bg="rgb(226, 39, 39)"
      _hover={{ bg: '#b81111' }}
      leftIcon={<MdOutlineDelete />}
    >
      Sil
    </Button>
  );
};

export default DeleteButton;
