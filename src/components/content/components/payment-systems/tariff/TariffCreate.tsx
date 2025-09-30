import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const TariffCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Tariff"
        title="Ödəniş Sistemləri - Reqlament və Tariflər"
        endpoint="Tariff"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
        ]}
        loadingKey="Tariff_loading"
      />
    </Box>
  );
};

export default TariffCreate;
