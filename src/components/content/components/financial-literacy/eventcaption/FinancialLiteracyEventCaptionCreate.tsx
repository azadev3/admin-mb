import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyEventCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyEventCaption"
        title="Maliyyə Savadlılığı - Tədbir Başlığı"
        contentType="multipart/form-data"
        endpoint="FinancialLiteracyEventCaption"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialLiteracyEventCaption_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyEventCaptionCreate;
