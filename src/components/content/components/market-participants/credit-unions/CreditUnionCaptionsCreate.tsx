import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CreditUnionCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/creditunion/captions"
        title="Bazar İştirakçıları - Kredit Təşkilatları - Başlıqlar"
        endpoint="creditunioncaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="creditunioncaption_loading"
      />
    </Box>
  );
};

export default CreditUnionCaptionsCreate;
