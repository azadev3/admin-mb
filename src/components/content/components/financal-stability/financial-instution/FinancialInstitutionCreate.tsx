import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialInstitutionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancialInstitution"
        title="Maliyyə Sabitliyi - Maliyyə Təşkilatı"
        contentType="application/json"
        endpoint="FinancialInstitution"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="FinancialInstitution_loading"
      />
    </Box>
  );
};

export default FinancialInstitutionCreate;
