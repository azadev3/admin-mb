import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialStabilityReportCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancialStabilityReport"
        title="Maliyyə Sabitliyi - Hesabatlar"
        endpoint="FinancialStabilityReport"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.pdf,.xlsx,.xls,.docx,.doc',
          },
        ]}
        loadingKey="FinancialStabilityReport_loading"
      />
    </Box>
  );
};

export default FinancialStabilityReportCreate;
