import { Button } from '@chakra-ui/react';
import { HiMiniPencilSquare } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import type { EditButtonProps } from './model';

const EditButton = <T,>({
  editButtonLocation,
  onEdit,
  item,
}: EditButtonProps<T>) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (editButtonLocation) {
      const path = editButtonLocation(item);
      if (path) navigate(path);
    }
    onEdit(item);
  };

  return (
    <Button
      onClick={handleClick}
      size="sm"
      colorScheme="gray"
      variant="outline"
      borderColor="#dcdcdc"
      bg="white"
      _hover={{ bg: '#f8f8f8', borderColor: '#094160' }}
      leftIcon={<HiMiniPencilSquare />}
    >
      Düzəliş et
    </Button>
  );
};

export default EditButton;
