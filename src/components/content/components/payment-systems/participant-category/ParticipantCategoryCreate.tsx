import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ParticipantCategoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/ParticipantCategory"
        title="Ödəniş Sistemləri - İştirakçı Kateqoriyası"
        endpoint="ParticipantCategory"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="ParticipantCategory_loading"
      />
    </Box>
  );
};

export default ParticipantCategoryCreate;
