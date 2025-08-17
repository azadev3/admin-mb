import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';

const TranslatesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/tercumeler" title="Saytın Ümumi Tərcümələri" />
      <FormField
        type="edit"
        id={Number(id)}
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

export default TranslatesEdit;
