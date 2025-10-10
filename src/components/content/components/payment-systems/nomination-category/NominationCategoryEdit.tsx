import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const NominationCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/NominationCategory"
        title="Ödəniş Sistemləri - Nominasiyalar Kateqoriyası"
        contentType="application/json"
        endpoint="NominationCategory"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="NominationCategory_loading"
      />
    </Box>
  );
};

export default NominationCategoryEdit;
