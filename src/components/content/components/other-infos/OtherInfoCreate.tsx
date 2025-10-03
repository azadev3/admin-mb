import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const OtherInfoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/diger-melumatlar"
        title="Digər Məlumatlar bölməsi"
        endpoint="otherinfo"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'URL', name: 'Url', type: 'text', multilang: false },
        ]}
        loadingKey="other_info_loading"
      />
    </Box>
  );
};

export default OtherInfoCreate;
