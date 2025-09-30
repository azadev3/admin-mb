import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/state-programs/captions"
        title="Ödəniş Sistemləri - Dövlət Proqramları - Başlıqlar"
        contentType="application/json"
        endpoint="PaymentSystemCaption"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PaymentSystemCaption_loading"
      />
    </Box>
  );
};

export default CaptionsCreate;
