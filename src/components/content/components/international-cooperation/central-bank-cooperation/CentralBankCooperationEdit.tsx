import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const CentralBankCooperationEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/international-cooperation/CentralBankCooperation"
        title="Beynəlxalq Əməkdaşlıq - Əməkdaşlıq"
        endpoint="CentralBankCooperation"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'İl',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="CentralBankCooperation_loading"
      />
    </Box>
  );
};

export default CentralBankCooperationEdit;
