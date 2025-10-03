import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentPostEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentPost"
        title="Ödəniş Sistemləri - Ani Ödəniş Postları"
        contentType="multipart/form-data"
        endpoint="InstantPaymentPost"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Qısa Açıqlama',
            name: 'shortDescription',
            type: 'text',
            multilang: true,
          },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="InstantPaymentPost_loading"
      />
    </Box>
  );
};

export default InstantPaymentPostEdit;
