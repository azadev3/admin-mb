import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const PaymentCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/payment/captions"
        title="Bazar İştirakçıları - Bank - Bankların Ödəniş Agentləri - Başlıqlar"
        endpoint="paymentagentcaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="paymentagentcaption_loading"
      />
    </Box>
  );
};

export default PaymentCaptionsCreate;
