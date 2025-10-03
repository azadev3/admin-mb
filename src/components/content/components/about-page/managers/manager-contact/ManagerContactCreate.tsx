import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ManagerContactCreate: React.FC = () => {
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

export default ManagerContactCreate;
