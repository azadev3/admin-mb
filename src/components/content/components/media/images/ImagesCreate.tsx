import { Box } from '@chakra-ui/react';
import { MainSeoSchema } from '../../../../../shared/MainSchemaConfig';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ImagesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/sekiller"
        title="Media - Şəkillər bölməsi"
        contentType="multipart/form-data"
        endpoint="gallery"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Tarix', name: 'Date', type: 'date' },
          { label: 'Şəkil', name: 'ImageFile', type: 'file' },
          { label: 'Digər Şəkillər', name: 'Files', type: 'multi-file' },
          ...MainSeoSchema,
        ]}
        loadingKey="gallery_loading"
      />
    </Box>
  );
};

export default ImagesCreate;
