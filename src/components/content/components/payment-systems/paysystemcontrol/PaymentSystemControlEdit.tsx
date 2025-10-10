import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const PaymentSystemControlEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="PaymentSystemControl"
        backRoute="/payment-systems/PaymentSystemControl"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Nəzarət"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PaymentSystemControl_loading"
      />
    </Box>
  );
};

export default PaymentSystemControlEdit;
