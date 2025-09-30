import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CustomerDocumentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/customerdocument"
        title="Müştəri Hüquqları - Müştəri Sənədi"
        endpoint="customerdocument"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="customerdocument_loading"
      />
    </Box>
  );
};

export default CustomerDocumentCreate;
