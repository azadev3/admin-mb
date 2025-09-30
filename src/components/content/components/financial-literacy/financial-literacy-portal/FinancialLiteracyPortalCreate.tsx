import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyPortalCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyPortal"
        title="Maliyyə Savadlılığı - Portal"
        contentType="multipart/form-data"
        endpoint="FinancialLiteracyPortal"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl / Fayllar',
            name: 'imageFile',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialLiteracyPortal_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyPortalCreate;
