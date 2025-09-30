import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentFaqCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentFAQ"
        title="Ödəniş Sistemləri - Tez-tez Verilən Suallar"
        endpoint="InstantPaymentFAQ"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InstantPaymentFAQ_loading"
      />
    </Box>
  );
};

export default InstantPaymentFaqCreate;
