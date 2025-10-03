import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RealtimeSettlementCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/RealTimeSettlementSystem"
        title="Ödəniş Sistemləri - Real Vaxt Rejimində Hesablaşmalar Sistemi (AZIPS)"
        contentType="application/json"
        endpoint="RealTimeSettlementSystem"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="RealTimeSettlementSystem_loading"
      />
    </Box>
  );
};

export default RealtimeSettlementCreate;
