import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const NominationCategoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/NominationCategory"
        title="Ödəniş Sistemləri - Nominasiyalar Kateqoriyası"
        endpoint="NominationCategory"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="NominationCategory_loading"
      />
    </Box>
  );
};

export default NominationCategoryCreate;
