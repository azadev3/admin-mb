import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const DirectorContactCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/director-contact"
        title="Direktorlar - Əlaqə"
        contentType="application/json"
        endpoint="directorcontact"
        fields={[
          {
            label: 'Başlıq',
            name: 'title',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Açıqlama',
            name: 'description',
            type: 'rich-text',
            multilang: true,
          },
          {
            label: "Bu məlumat hansı Direktor'a aiddir?",
            type: 'select',
            multilang: false,
            name: 'directorId',
            optionsEndpoint: 'director',
          },
        ]}
        loadingKey="director-contact_loading"
      />
    </Box>
  );
};

export default DirectorContactCreate;
