import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const PhonesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/telefonlar" title="Footar Telefonlar bölməsi" />
      <FormField
        type="create"
        endpoint="Phone"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Telefon Nömrəsi', name: 'contactNumber', type: 'text' },
        ]}
        loadingKey="phones_loading"
      />
    </Box>
  );
};

export default PhonesCreate;
