import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const FinancalDevelopmentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financal-development"
        title="Maliyyə Sektorunun İnkişaf Strategiyası - Məlumat Əlavə Et"
        endpoint="financialdevelopment"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl Head Title',
            name: 'fileHeadTitle',
            type: 'text',
            multilang: true,
          },
          { label: 'Fayl Başlığı', name: 'fileTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
          },
          {
            label: 'Şəkil',
            name: 'ImageFile',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="financialdevelopment_loading"
      />
    </Box>
  );
};

export default FinancalDevelopmentCreate;
