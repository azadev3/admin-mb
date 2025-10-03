import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const GraphicCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/graphic"
        title="Pul Siyasəti - Kredit İttifaqlarının Siyahısı"
        endpoint="monetarypolicygraphic"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="monetarypolicygraphic_loading"
      />
    </Box>
  );
};

export default GraphicCreate;
