import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyPortalCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyPortalCaption"
        title="Maliyyə Savadlılığı - Portal Başlığı"
        contentType="multipart/form-data"
        endpoint="FinancialLiteracyPortalCaption"
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
        loadingKey="FinancialLiteracyPortalCaption_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyPortalCaptionCreate;
