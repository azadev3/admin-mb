import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InternationalEventCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/InternationalEvent"
        title="Beynəlxalq Əməkdaşlıq - Tədbirlər"
        endpoint="InternationalEvent"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayllar (seçin)',
            name: 'imageFile',
            type: 'multi-file',
            multilang: true,
          },
        ]}
        loadingKey="InternationalEvent_loading"
      />
    </Box>
  );
};

export default InternationalEventCreate;
