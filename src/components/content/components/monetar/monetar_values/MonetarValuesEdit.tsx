import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const MonetarValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/monetar-gostericiler-values"
        title="Monetar Göstəricilər - Dəyərlər"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="MonetaryIndicator"
        id={Number(id)}
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Pul bazası',
            name: 'monetaryIndicatorCategoryId',
            type: 'select',
            optionsEndpoint: 'MonetaryIndicatorCategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="MonetaryIndicator_loading"
      />
    </Box>
  );
};

export default MonetarValuesEdit;
