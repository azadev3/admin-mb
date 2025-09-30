import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const RegulationEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/Regulation"
        title="Ödəniş Sistemləri - Tənzimləmə"
        contentType="multipart/form-data"
        endpoint="Regulation"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
        ]}
        loadingKey="Regulation_loading"
      />
    </Box>
  );
};

export default RegulationEdit;
