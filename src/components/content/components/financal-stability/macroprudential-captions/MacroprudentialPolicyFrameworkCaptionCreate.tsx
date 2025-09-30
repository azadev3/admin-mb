import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MacroprudentialPolicyFrameworkCaptionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/MacroprudentialPolicyFrameworkCaption"
        title="Maliyyə Sabitliyi - Makroprudensial Siyasət Çərçivə Başlığı"
        contentType="application/json"
        endpoint="MacroprudentialPolicyFrameworkCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="MacroprudentialPolicyFrameworkCaption_loading"
      />
    </Box>
  );
};

export default MacroprudentialPolicyFrameworkCaptionCreate;
