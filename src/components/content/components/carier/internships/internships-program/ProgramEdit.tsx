import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const ProgramEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/carier/intern/program"
        title="Karyera - Təcrübə Proqramları"
        endpoint="internshipprogram"
        contentType="multipart/form-data"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="internshipprogram_loading"
      />
    </Box>
  );
};

export default ProgramEdit;
