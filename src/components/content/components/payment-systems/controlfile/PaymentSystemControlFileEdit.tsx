import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentSystemControlFileEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/PaymentSystemControlFile"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Nəzarət Faylı"
        endpoint="PaymentSystemControlFile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'Fayl', name: 'file', type: 'file', multilang: false },
        ]}
        loadingKey="PaymentSystemControlFile_loading"
      />
    </Box>
  );
};

export default PaymentSystemControlFileEdit;
