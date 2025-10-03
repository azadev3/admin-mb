import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentSystemControlServiceCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/PaymentSystemControlService"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Nəzarət Xidməti"
        endpoint="PaymentSystemControlService"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Ödəniş Sistemi Nəzarəti (seçin)',
            name: 'PaymentSystemControlId',
            optionsEndpoint: 'PaymentSystemControl',
            type: 'select',
            multilang: false,
          },
        ]}
        loadingKey="PaymentSystemControlService_loading"
      />
    </Box>
  );
};

export default PaymentSystemControlServiceCreate;
