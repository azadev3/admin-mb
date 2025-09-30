import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../shared/form/CreateOrUpdate';

const TranslatesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="translate"
        backRoute="/tercumeler"
        title="Saytın Ümumi Tərcümələri"
        contentType="application/json"
        fields={[
          {
            label: 'Key (açar söz)',
            placeholder: 'Məsələn: home_title',
            name: 'key',
            type: 'text',
            multilang: false,
            isNoEditable: true,
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

export default TranslatesEdit;
