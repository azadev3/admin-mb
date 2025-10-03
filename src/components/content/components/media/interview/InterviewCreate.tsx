import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const InterviewCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/interview"
        title="Müsahibələr və Çıxışlar bölməsi"
        contentType="multipart/form-data"
        endpoint="interview"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'PDF Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx',
          },
        ]}
        loadingKey="interview_loading"
      />
    </Box>
  );
};

export default InterviewCreate;
