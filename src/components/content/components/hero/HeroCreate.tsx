import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const HeroCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/hero"
        title="Hero Bölməsini Əlavə Et"
        contentType="multipart/form-data"
        endpoint="Hero"
        fields={[
          { label: 'Şəkil', name: 'File', type: 'file' },
          { label: 'Başlıq', name: 'Title', type: 'text', multilang: true },
        ]}
        loadingKey="hero_loading"
      />
    </Box>
  );
};

export default HeroCreate;
