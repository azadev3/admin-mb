import { Box } from '@chakra-ui/react';
import FormField from '../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const RateCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/valyuta-indeksleri" title="Valyuta İndeksləri" />
      <FormField
        type="create"
        endpoint="rate/import"
        contentType="multipart/form-data"
        fields={[
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
          {
            label: 'FAYL',
            name: 'file',
            type: 'file',
            accept: '.xlsx,.xls,.doc,.docx,.pdf,.word',
            multilang: false,
          },
        ]}
        loadingKey="rateimport_loading"
      />
    </Box>
  );
};

export default RateCreate;
