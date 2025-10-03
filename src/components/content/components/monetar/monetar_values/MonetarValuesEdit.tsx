import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MonetarValuesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/monetar-gostericiler-values"
        title="Monetar Göstəricilər - Dəyərlər"
        contentType="application/json"
        endpoint="monetaryindicator"
        fields={[
          {
            label: 'Dəyər',
            placeholder: 'Dəyəri qeyd edin',
            name: 'value',
            type: 'number',
          },
          {
            label: 'Kateqoriya Seçin. Məsələn: Pul bazası',
            name: 'monetaryindicatorcategoryid',
            type: 'select',
            optionsEndpoint: 'monetaryindicatorcategory',
          },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="MonetaryIndicator_loading"
      />
    </Box>
  );
};

export default MonetarValuesEdit;
