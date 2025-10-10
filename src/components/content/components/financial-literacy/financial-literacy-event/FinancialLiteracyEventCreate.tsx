import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyEventCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyEvent"
        title="Maliyyə Savadlılığı - Maliyyə Savadlılığı Tədbiri"
        endpoint="FinancialLiteracyEvent"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
        ]}
        loadingKey="FinancialLiteracyEvent_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyEventCreate;
