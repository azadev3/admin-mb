import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/captions"
        title="Müştəri Hüquqları - Başlıq Əlavə Et"
        endpoint="CustomerRightCaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="CustomerRightCaption_loading"
      />
    </Box>
  );
};

export default CaptionsCreate;
