import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialStabilityCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancialStabilityCaption"
        title="Maliyyə Sabitliyi - Başlıqlar"
        contentType="application/json"
        endpoint="FinancialStabilityCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="FinancialStabilityCaption_loading"
      />
    </Box>
  );
};

export default FinancialStabilityCaptionCreate;
