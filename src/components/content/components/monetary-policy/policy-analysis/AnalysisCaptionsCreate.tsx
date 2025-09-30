import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const AnalysisCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/pul-siyaseti/analysis-descriptions"
        title="Pul Siyasəti - Proqnozlaşdırma və Siyasət Təhlili Sistemi - Açıqlamalar"
        endpoint="PolicyAnalysis"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="PolicyAnalysis_loading"
      />
    </Box>
  );
};

export default AnalysisCaptionsCreate;
