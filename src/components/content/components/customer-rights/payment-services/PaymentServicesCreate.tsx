import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentServicesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="paymentservice"
        backRoute="/customer-rights/payment-services"
        title="Müştəri Hüquqları - Ödəniş Xidmətləri"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
        ]}
        loadingKey="paymentservice_loading"
      />
    </Box>
  );
};

export default PaymentServicesCreate;
