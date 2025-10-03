import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CategoriesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/state-programs/categories"
        title="Ödəniş Sistemləri - Dövlət Proqramları - Kateqoriyalar"
        contentType="application/json"
        endpoint="StateProgramCategory"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="StateProgramCategory_loading"
      />
    </Box>
  );
};

export default CategoriesEdit;
