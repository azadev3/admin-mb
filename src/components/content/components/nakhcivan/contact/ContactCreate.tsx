import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ContactCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/nakhcivan/contact"
        title="Naxçıvan Muxtar Respublikası İdarəsi - Əlaqə"
        endpoint="nakhchivancontact"
        contentType="application/json"
        fields={[
          { label: 'Xəritə Linki', name: 'map', type: 'text', multilang: false },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="nakhchivancontact_loading"
      />
    </Box>
  );
};

export default ContactCreate;
