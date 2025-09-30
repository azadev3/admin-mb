import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MethodologyCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="multipart/form-data"
        endpoint="methodology"
        backRoute="/methodology"
        title="Statistika - Metodologiya"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
        ]}
        loadingKey="methodology_loading"
      />
    </Box>
  );
};

export default MethodologyCreate;
