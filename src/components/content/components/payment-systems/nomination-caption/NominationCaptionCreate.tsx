import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const NominationCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/NominationCaption"
        title="Ödəniş Sistemləri - Nominasiyalar - Başlıqlar"
        contentType="application/json"
        endpoint="NominationCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="NominationCaption_loading"
      />
    </Box>
  );
};

export default NominationCaptionCreate;
