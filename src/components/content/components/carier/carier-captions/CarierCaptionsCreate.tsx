import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CarierCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/captions"
        title="Karyera - Başlıq Əlavə Et"
        endpoint="careercaption"
        contentType="application/json"
        fields={[
          { label: 'Cover Başlıq', name: 'description', type: 'text', multilang: true },
        ]}
        loadingKey="careercaption_loading"
      />
    </Box>
  );
};

export default CarierCaptionsCreate;
