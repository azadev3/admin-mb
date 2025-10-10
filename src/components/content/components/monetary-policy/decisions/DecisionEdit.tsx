import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const DecisionEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/decision"
        title="Pul Siyasəti - Pul Siyasəti Qərarları"
        endpoint="monetarypolicydecision"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Sloqan', name: 'slogan', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          { label: 'Şəkillər', name: 'imageFile', type: 'multi-file', multilang: false },
        ]}
        loadingKey="monetarypolicydecision_loading"
      />
    </Box>
  );
};

export default DecisionEdit;
