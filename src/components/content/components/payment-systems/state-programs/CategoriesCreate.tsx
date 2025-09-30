import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CategoriesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/state-programs/categories"
        title="Ödəniş Sistemləri - Dövlət Proqramları - Kateqoriyalar"
        endpoint="StateProgramCategory"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="StateProgramCategory_loading"
      />
    </Box>
  );
};

export default CategoriesCreate;
