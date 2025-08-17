import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const TranslatesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/tercumeler" title="Saytın Ümumi Tərcümələri" />
      <FormField
        type="create"
        endpoint="Translate"
        contentType="application/json"
        fields={[
          {
            label: 'Key (açar söz)',
            placeholder: 'Məsələn: home_title',
            name: 'key',
            type: 'text',
          },
          {
            label: 'Azərbaycanca Dəyər',
            placeholder: 'Məsələn: Ana Səhifə',
            name: 'valueAz',
            type: 'text',
          },
          {
            label: 'İngiliscə Dəyər',
            placeholder: 'Məsələn: Home Page',
            name: 'valueEn',
            type: 'text',
          },
        ]}
        loadingKey="translates_loading"
      />
    </Box>
  );
};

export default TranslatesCreate;
