import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ContactEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
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

export default ContactEdit;
