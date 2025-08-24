import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const ChronologyCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/tarix-xronologiya"
        title="Haqqımızda - Tarix / Xronologiya"
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="Chronology"
        fields={[
          {
            label: 'İl',
            placeholder: 'İl seçin',
            name: 'year',
            type: 'number',
          },
          { label: 'Açıqlama (AZ)', name: 'textAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'textEn', type: 'text' },
        ]}
        loadingKey="Chronology_loading"
      />
    </Box>
  );
};

export default ChronologyCreate;
