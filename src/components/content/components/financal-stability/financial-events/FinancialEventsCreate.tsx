import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialEventsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancialEvent"
        title="Maliyyə Sabitliyi - Maliyyə Hadisələri"
        endpoint="FinancialEvent"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
        ]}
        loadingKey="FinancialEvent_loading"
      />
    </Box>
  );
};

export default FinancialEventsCreate;
