import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const DigitalPortalEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/digital-portal-cards"
        title="Digital Portal - Əlavə Et"
        endpoint="digitalportal"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Mətn', name: 'text', type: 'text', multilang: true },
          { label: 'URL', name: 'url', type: 'text', multilang: false },
        ]}
        loadingKey="DigitalPortal_loading"
      />
    </Box>
  );
};

export default DigitalPortalEdit;
