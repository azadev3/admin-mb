import { Box } from '@chakra-ui/react';
import FormField from '../../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const HistoryCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/haqqimizda/tarix" title="Haqqımızda - Tarix" />
      <FormField
        type="create"
        endpoint="History"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'descriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'descriptionEn', type: 'text' },
        ]}
        loadingKey="History_loading"
      />
    </Box>
  );
};

export default HistoryCreate;
