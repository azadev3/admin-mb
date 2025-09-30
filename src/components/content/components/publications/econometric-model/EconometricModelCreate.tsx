import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const EconometricModelCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/publications/EconometricModel"
        title="Nəşrlər və Tədqiqatlar - Ekonometrik Model"
        contentType="application/json"
        endpoint="EconometricModel"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="EconometricModel_loading"
      />
    </Box>
  );
};

export default EconometricModelCreate;
