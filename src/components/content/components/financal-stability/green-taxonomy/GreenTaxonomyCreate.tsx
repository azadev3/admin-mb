import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const GreenTaxonomyCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-stability/GreenTaxonomy"
        title="Maliyyə Sabitliyi - Yaşıl Taksonomiya"
        contentType="application/json"
        endpoint="GreenTaxonomy"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="GreenTaxonomy_loading"
      />
    </Box>
  );
};

export default GreenTaxonomyCreate;
