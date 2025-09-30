import { Box } from '@chakra-ui/react';
import FormField from '../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const YieldParameterCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/gelirlilik-parametrleri"
        title="Gəlirlilik Parametrləri"
      />
      <FormField
        type="create"
        endpoint="yield/import-parameters"
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
        loadingKey="importparameters_loading"
      />
    </Box>
  );
};

export default YieldParameterCreate;
