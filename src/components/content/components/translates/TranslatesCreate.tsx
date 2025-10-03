import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const TranslatesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/tercumeler"
        title="Saytın Ümumi Tərcümələri"
        endpoint="translate"
        contentType="application/json"
        fields={[
          {
            label: 'Key (açar söz)',
            placeholder: 'Məsələn: home_title',
            name: 'key',
            type: 'text',
            multilang: false,
          },
          {
            label: 'Dəyər',
            placeholder: 'Məsələn: Ana Səhifə',
            name: 'value',
            type: 'text',
            multilang: true,
          },
        ]}
        loadingKey="translates_loading"
      />
    </Box>
  );
};

export default TranslatesCreate;
