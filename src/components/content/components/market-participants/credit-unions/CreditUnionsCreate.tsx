import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CreditUnionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/creditunion/descriptions"
        title="Bazar İştirakçıları - Kredit Təşkilatları - Açıqlamalar"
        endpoint="creditunion"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="creditunion_loading"
      />
    </Box>
  );
};

export default CreditUnionsCreate;
