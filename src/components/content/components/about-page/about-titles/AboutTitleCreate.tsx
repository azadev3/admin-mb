import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const AboutTitleCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/about"
        title="Haqqımızda - Açıqlamalar"
        contentType="application/json"
        endpoint="about"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="about_titles_loading"
      />
    </Box>
  );
};

export default AboutTitleCreate;
