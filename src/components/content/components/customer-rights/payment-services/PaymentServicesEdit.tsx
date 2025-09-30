import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Months } from '../../inflation/InflationValuesCreate';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentServicesEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/customer-rights/payment-services"
        title="Müştəri Hüquqları - Ödəniş Xidmətləri"
        endpoint="paymentservice"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
        ]}
        loadingKey="paymentservice_loading"
      />
    </Box>
  );
};

export default PaymentServicesEdit;
