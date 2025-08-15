import { Button } from '@chakra-ui/react';
import { HiOutlineRefresh } from 'react-icons/hi';

const RefreshButton: React.FC = () => {
  return (
    <Button colorScheme="gray" leftIcon={<HiOutlineRefresh />}>
      Yenilə
    </Button>
  );
};

export default RefreshButton;