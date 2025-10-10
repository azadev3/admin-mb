import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const OpenBankingCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-innovation/OpenBanking"
        title="Finansal İnnovasiya - Açıq Bankçılıq"
        contentType="application/json"
        endpoint="OpenBanking"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="OpenBanking_loading"
      />
    </Box>
  );
};

export default OpenBankingCreate;
