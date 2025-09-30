import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/CentralBankCooperationCaption"
        title="Beynəlxalq Əməkdaşlıq - Mərkəzi Bank - Başlıqlar"
        contentType="application/json"
        endpoint="CentralBankCooperationCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="CentralBankCooperationCaption_loading"
      />
    </Box>
  );
};

export default CaptionsCreate;
