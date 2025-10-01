import { Box } from '@chakra-ui/react';
import FormField from '../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const YieldDurationsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/gelirlilik-muddetleri"
        title="Gəlirlilik Müddətləri"
      />
      <FormField
        type="create"
        endpoint="yield/import-durations"
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
        loadingKey="importdurations_loading"
      />
    </Box>
  );
};

export default YieldDurationsCreate;
