import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialStabilityReportCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancialStabilityReportCaption"
        title="Maliyyə Sabitliyi - Hesabat Başlıqları"
        contentType="application/json"
        endpoint="FinancialStabilityReportCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="FinancialStabilityReportCaption_loading"
      />
    </Box>
  );
};

export default FinancialStabilityReportCaptionCreate;
