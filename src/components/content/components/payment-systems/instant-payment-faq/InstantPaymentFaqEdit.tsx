import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentFaqEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentFAQ"
        title="Ödəniş Sistemləri - Tez-tez Verilən Suallar"
        contentType="application/json"
        endpoint="InstantPaymentFAQ"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InstantPaymentFAQ_loading"
      />
    </Box>
  );
};

export default InstantPaymentFaqEdit;
