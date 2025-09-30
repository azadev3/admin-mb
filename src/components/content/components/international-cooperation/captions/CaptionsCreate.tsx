import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/InternationalCooperationCaption"
        title="Beynəlxalq Əməkdaşlıq - Başlıqlar"
        contentType="application/json"
        endpoint="InternationalCooperationCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InternationalCooperationCaption_loading"
      />
    </Box>
  );
};

export default CaptionsCreate;
