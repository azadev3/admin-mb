import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const StateProgramCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/state-programs/StateProgram"
        title="Ödəniş Sistemləri - Dövlət Proqramı"
        endpoint="StateProgram"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
          },
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

export default StateProgramCreate;
