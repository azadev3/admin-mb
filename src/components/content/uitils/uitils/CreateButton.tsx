import { Button } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export interface CreateButtonProps {
  createButtonLocation: string;
  onRefresh: () => void;
  dataLoading: boolean;
}

const CreateButton: React.FC<CreateButtonProps> = ({ createButtonLocation }) => {
  const navigate = useNavigate();

  return (
    <Button
      colorScheme="blue"
      leftIcon={<FaPlus />}
      onClick={() => navigate(createButtonLocation)}
    >
      Yarat
    </Button>
  );
};

export default CreateButton;