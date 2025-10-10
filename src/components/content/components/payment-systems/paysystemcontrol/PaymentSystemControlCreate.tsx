import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentSystemControlCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/PaymentSystemControl"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Nəzarət"
        endpoint="PaymentSystemControl"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PaymentSystemControl_loading"
      />
    </Box>
  );
};

export default PaymentSystemControlCreate;
