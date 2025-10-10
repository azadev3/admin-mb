import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const FinancialLiteracyEventEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/FinancialLiteracyEvent"
        title="Maliyyə Savadlılığı - Maliyyə Savadlılığı Tədbiri"
        endpoint="FinancialLiteracyEvent"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
        ]}
        loadingKey="FinancialLiteracyEvent_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyEventEdit;
