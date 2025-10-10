import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ShareholderCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/share-holder/captions"
        title="Bazar İştirakçıları - Səhmdarların ümumi yığıncağının məsafədən (onlayn) keçirilməsinə dair təlimat - Başlıqlar"
        endpoint="shareholdercaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="shareholdercaption_loading"
      />
    </Box>
  );
};

export default ShareholderCaptionsCreate;
