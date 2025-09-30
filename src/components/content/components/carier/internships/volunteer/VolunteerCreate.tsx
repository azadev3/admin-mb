import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const VolunteerCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="volunteer"
        backRoute="/carier/intern/volunteer"
        title="Karyera - Könüllü"
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

export default VolunteerCreate;
