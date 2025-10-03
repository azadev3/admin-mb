import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const DigitalPortalCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/digital-portal-cards"
        title="Digital Portal - Əlavə Et"
        endpoint="digitalportal"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Mətn', name: 'text', type: 'text', multilang: true },
          { label: 'URL', name: 'url', type: 'text', multilang: false },
        ]}
        loadingKey="DigitalPortal_loading"
      />
    </Box>
  );
};

export default DigitalPortalCreate;
