import { Button } from '@chakra-ui/react';
import { MdOutlineDelete } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import { DeleteModalItem, DeleteModalVisible } from '../../../../atoms/atoms';

export interface DeleteButtonProps {
  onDelete: (item: any) => void;
  item: any;
  refetch?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ item, refetch }) => {
  const setVisible = useSetRecoilState(DeleteModalVisible);
  const setItem = useSetRecoilState(DeleteModalItem);

  const handleClick = () => {
    setItem({ ...item, refetch }); 
    setVisible(true);
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
