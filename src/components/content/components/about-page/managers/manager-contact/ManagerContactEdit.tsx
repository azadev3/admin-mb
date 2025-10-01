import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ManagerContactEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/managercontact"
        title="Rəhbərlik - Əlaqə"
        contentType="application/json"
        endpoint="managercontact"
        fields={[
          {
            label: 'Başlıq',
            name: 'title',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Açıqlama',
            name: 'description',
            type: 'rich-text',
            multilang: true,
          },
          {
            label: 'Rəhbər',
            type: 'select',
            multilang: false,
            name: 'managerId',
            optionsEndpoint: 'manager',
          },
        ]}
        loadingKey="managercontact_loading"
      />
    </Box>
  );
};

export default ManagerContactEdit;
