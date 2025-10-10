import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InstantPaymentOrganizationEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/payment-systems/InstantPaymentOrganization"
        title="Ödəniş Sistemləri - Ani Ödəniş Təşkilatları"
        contentType="application/json"
        endpoint="InstantPaymentOrganization"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Kod', name: 'code', type: 'text', multilang: false },
        ]}
        loadingKey="InstantPaymentOrganization_loading"
      />
    </Box>
  );
};

export default InstantPaymentOrganizationEdit;
