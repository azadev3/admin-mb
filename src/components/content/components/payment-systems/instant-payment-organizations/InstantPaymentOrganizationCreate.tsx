import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentOrganizationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentOrganization"
        title="Ödəniş Sistemləri - Ani Ödəniş Təşkilatları"
        endpoint="InstantPaymentOrganization"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Kod', name: 'code', type: 'text', multilang: false },
        ]}
        loadingKey="InstantPaymentOrganization_loading"
      />
    </Box>
  );
};

export default InstantPaymentOrganizationCreate;
