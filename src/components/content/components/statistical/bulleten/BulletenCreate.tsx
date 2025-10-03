import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BulletenCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/statistika-bulleten"
        title="Statistika - Bülleten"
        contentType="multipart/form-data"
        endpoint="statisticalbulletin"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'İl', name: 'Year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            accept: '.pdf,.docx,.xlsx',
            multilang: false,
          },
        ]}
        loadingKey="statisticalbulletin_loading"
      />
    </Box>
  );
};

export default BulletenCreate;
