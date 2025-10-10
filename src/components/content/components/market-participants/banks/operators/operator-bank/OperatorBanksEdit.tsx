import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../../shared/form/CreateOrUpdate';

const OperatorBanksEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/operator/bank"
        title="Bazar İştirakçıları - Operator / Bank"
        endpoint="operatorbank"
        contentType="application/json"
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="operatorbank_loading"
      />
    </Box>
  );
};

export default OperatorBanksEdit;
