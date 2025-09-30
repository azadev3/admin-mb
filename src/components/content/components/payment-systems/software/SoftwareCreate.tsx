import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const SoftwareCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Software"
        title="Ödəniş Sistemləri - Proqram Təminatı"
        endpoint="Software"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
        ]}
        loadingKey="Software_loading"
      />
    </Box>
  );
};

export default SoftwareCreate;
