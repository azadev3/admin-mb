import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MediaQueryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/mediaquery"
        title="Media Sorğular"
        contentType="application/json"
        endpoint="mediaquery"
        fields={[
          { label: 'Email', name: 'email', type: 'email', multilang: false },
          { label: 'Telefon', name: 'phone', type: 'text', multilang: false },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="mediaquery_loading"
      />
    </Box>
  );
};

export default MediaQueryCreate;
