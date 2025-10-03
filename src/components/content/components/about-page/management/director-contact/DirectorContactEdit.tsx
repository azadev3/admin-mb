import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const DirectorContactEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/director-contact"
        title="Direktorlar - Əlaqə"
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
        loadingKey="Director-contact_loading"
      />
    </Box>
  );
};

export default DirectorContactEdit;
