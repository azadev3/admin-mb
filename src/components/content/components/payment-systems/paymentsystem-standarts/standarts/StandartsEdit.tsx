import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const StandartsEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        contentType="multipart/form-data"
        backRoute="/payment-systems/standarts/PaymentSystemStandart"
        title="Ödəniş Sistemləri - Ödəniş Sistemi Üzrə Standartlar - Əsas"
        endpoint="PaymentSystemStandart"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PaymentSystemStandart_loading"
      />
    </Box>
  );
};

export default StandartsEdit;
