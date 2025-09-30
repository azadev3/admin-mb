import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PolicyCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/revisionpolicy"
        title="Statistika - Məlumatların Reviziyası Siyasəti"
        contentType="application/json"
        endpoint="revisionpolicy"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="revisionpolicy_loading"
      />
    </Box>
  );
};

export default PolicyCreate;
