import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const VirtualEducationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/financial-literacy/VirtualEducation"
        title="Maliyyə Savadlılığı - Virtual Təhsil"
        contentType="multipart/form-data"
        endpoint="VirtualEducation"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl / Fayllar',
            name: 'imageFile',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="VirtualEducation_loading"
      />
    </Box>
  );
};

export default VirtualEducationCreate;
