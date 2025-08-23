import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../helpers/form/FormField';

const PercentValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/faiz-dehlizi-values"
        title="Faiz Dəhlizi - Dəyərlər"
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="PercentCorridor"
        id={Number(id)}
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Aşağı Faiz Həddi',
            name: 'percentCategoryId',
            type: 'select',
            optionsEndpoint: 'PercentCategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="PercentCorridor_loading"
      />
    </Box>
  );
};

export default PercentValuesEdit;
