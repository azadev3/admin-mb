import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const FaqEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/standarts/faq"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - FAQ"
        contentType="multipart/form-data"
        endpoint="PaymentSystemStandartFAQ"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Ödəniş Sistemi Standartı (Seçin)',
            name: 'paymentSystemStandartId',
            type: 'select',
            optionsEndpoint: 'PaymentSystemStandart',
            multilang: false,
          },
        ]}
        loadingKey="PaymentSystemStandartFAQ_loading"
      />
    </Box>
  );
};

export default FaqEdit;
