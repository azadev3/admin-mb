import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const PaymentSystemStandartFileEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/standarts/PaymentSystemStandartFile"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - Fayllar"
        contentType="multipart/form-data"
        endpoint="PaymentSystemStandartFile"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
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

export default PaymentSystemStandartFileEdit;
