import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const OfficeCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/office"
        title="Office"
        contentType="multipart/form-data"
        endpoint="office"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'addresse', type: 'text', multilang: true },
          {
            label: 'Sədr',
            name: 'chairmen',
            type: 'text',
            multilang: true,
            customPluralKey: 'chairmen',
          },
          { label: 'Telefon', name: 'phone', type: 'number', multilang: false },
          {
            label: 'Şəkil',
            name: 'ImageFile',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Digər Fayl',
            name: 'StatuteFile',
            type: 'file',
            multilang: false,
            accept: '.pdf',
          },
        ]}
        loadingKey="office_loading"
      />
    </Box>
  );
};

export default OfficeCreate;
