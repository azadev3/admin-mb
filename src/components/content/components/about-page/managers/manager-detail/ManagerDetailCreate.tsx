import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ManagerDetailCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/managerdetail"
        title="Rəhbərlik Daxili"
        contentType="application/json"
        endpoint="managerdetail"
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
        loadingKey="managerdetail_loading"
      />
    </Box>
  );
};

export default ManagerDetailCreate;
