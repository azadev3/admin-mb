import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentSystemControlFilelerCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentSystemControlFileler"
        title="Ödəniş Sistemləri - Ani Ödəniş Sistemi"
        endpoint="InstantPaymentSystemControlFileler"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InstantPaymentSystemControlFileler_loading"
      />
    </Box>
  );
};

export default InstantPaymentSystemControlFilelerCreate;
