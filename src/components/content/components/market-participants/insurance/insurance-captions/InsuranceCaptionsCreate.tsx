import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const InsuranceCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/insurance/captions"
        title="Bazar İştirakçıları - Sığorta - Başlıqlar"
        endpoint="insurercaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="insurercaption_loading"
      />
    </Box>
  );
};

export default InsuranceCaptionsCreate;
