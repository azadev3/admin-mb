import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const DigitalPortalCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/digital-portal-texts"
        title="Digital Portal - Mətn və Başlıq Əlavə Et"
        endpoint="digitalportalcaption"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'text', multilang: true },
        ]}
        loadingKey="DigitalPortalCaption_loading"
      />
    </Box>
  );
};

export default DigitalPortalCaptionsCreate;
