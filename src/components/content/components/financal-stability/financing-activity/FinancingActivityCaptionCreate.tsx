import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancingActivityCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/FinancingActivityCaption"
        title="Maliyyə Sabitliyi - Maliyyələşdirmə Fəaliyyəti Başlığı"
        contentType="application/json"
        endpoint="FinancingActivityCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="FinancingActivityCaption_loading"
      />
    </Box>
  );
};

export default FinancingActivityCaptionCreate;
