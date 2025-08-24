import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const ChronologyEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/tarix-xronologiya"
        title="Haqqımızda - Tarix / Xronologiya"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="Chronology"
        id={Number(id)}
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

export default ChronologyEdit;
