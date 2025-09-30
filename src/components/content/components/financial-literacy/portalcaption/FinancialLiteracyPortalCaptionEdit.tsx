import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyPortalCaptionEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyPortalCaption"
        title="Maliyyə Savadlılığı - Portal Başlığı"
        endpoint="FinancialLiteracyPortalCaption"
        contentType="multipart/form-data"
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

export default FinancialLiteracyPortalCaptionEdit;
