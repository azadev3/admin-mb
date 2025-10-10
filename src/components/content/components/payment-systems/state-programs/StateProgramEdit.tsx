import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StateProgramEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/state-programs/StateProgram"
        title="Ödəniş Sistemləri - Dövlət Proqramı"
        contentType="multipart/form-data"
        endpoint="StateProgram"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
          {
            label: 'Dövlət Proqramı Kateqoriyası (seçin)',
            name: 'stateProgramCategoryId',
            type: 'select',
            optionsEndpoint: 'StateProgramCategory',
            multilang: false,
          },
        ]}
        loadingKey="StateProgram_loading"
      />
    </Box>
  );
};

export default StateProgramEdit;
