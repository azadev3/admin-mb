import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const DirectorContentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/director-content"
        title="Direktorlar Daxili Content"
        contentType="application/json"
        endpoint="directordetail"
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
        loadingKey="Director_loading"
      />
    </Box>
  );
};

export default DirectorContentCreate;
