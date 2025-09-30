import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../../shared/form/CreateOrUpdate';

const OperatorCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/operator/captions"
        title="Bazar İştirakçıları - Bank / Operator - Başlıqlar"
        endpoint="operatorbankcaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="operatorbankcaption_loading"
      />
    </Box>
  );
};

export default OperatorCaptionsCreate;
