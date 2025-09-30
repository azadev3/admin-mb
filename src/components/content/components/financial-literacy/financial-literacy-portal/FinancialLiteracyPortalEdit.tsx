import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyPortalEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="FinancialLiteracyPortal"
        backRoute="/financial-literacy/FinancialLiteracyPortal"
        title="Maliyyə Savadlılığı - Portal"
        contentType="multipart/form-data"
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

export default FinancialLiteracyPortalEdit;
