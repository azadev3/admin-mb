import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InternationalFinancialOrganizationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/InternationalFinancialOrganization"
        title="Beynəlxalq Əməkdaşlıq - Beynəlxalq Maliyyə Təşkilatı"
        contentType="application/json"
        endpoint="InternationalFinancialOrganization"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InternationalFinancialOrganization_loading"
      />
    </Box>
  );
};

export default InternationalFinancialOrganizationCreate;
