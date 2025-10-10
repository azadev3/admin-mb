import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const PaymentSystemStandartFileCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="multipart/form-data"
        backRoute="/payment-systems/standarts/PaymentSystemStandartFile"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - Fayllar"
        endpoint="PaymentSystemStandartFile"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.pdf,.xlsx,.xls,.doc,.docx',
          },
          {
            label: 'Ödəniş Sistemi Standartı (Seçin)',
            name: 'paymentSystemStandartId',
            type: 'select',
            optionsEndpoint: 'PaymentSystemStandart',
            multilang: false,
          },
        ]}
        loadingKey="PaymentSystemStandartFile_loading"
      />
    </Box>
  );
};

export default PaymentSystemStandartFileCreate;
