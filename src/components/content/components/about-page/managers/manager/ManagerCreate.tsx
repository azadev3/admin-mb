import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ManagerCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/manager"
        title="Rəhbərlik"
        contentType="multipart/form-data"
        endpoint="manager"
        fields={[
          {
            label: 'Tam Ad',
            name: 'fullName',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Pozisiya',
            name: 'position',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Fayl',
            type: 'file',
            multilang: false,
            name: 'file',
          },
        ]}
        loadingKey="manager_loading"
      />
    </Box>
  );
};

export default ManagerCreate;
