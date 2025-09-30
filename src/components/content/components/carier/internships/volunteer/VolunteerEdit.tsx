import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const VolunteerEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/intern/volunteer"
        title="Karyera - Könüllü"
        endpoint="volunteer"
        contentType="multipart/form-data"
        fields={[
          { label: 'Tam Ad / Soyad', name: 'fullname', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="volunteer_loading"
      />
    </Box>
  );
};

export default VolunteerEdit;
