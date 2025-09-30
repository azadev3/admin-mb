import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const StandartsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/standarts/PaymentSystemStandart"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - Əsas"
        endpoint="PaymentSystemStandart"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PaymentSystemStandart_loading"
      />
    </Box>
  );
};

export default StandartsCreate;
