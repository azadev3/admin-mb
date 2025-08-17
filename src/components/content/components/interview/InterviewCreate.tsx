import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const InterviewCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/musahibeler-ve-cixislar"
        title="Ana Səhifə - Müsahibələr və Çıxışlar bölməsi"
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="Interview"
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'PDF Fayl', name: 'File', type: 'other_files' },
        ]}
        loadingKey="interview_loading"
      />
    </Box>
  );
};

export default InterviewCreate;
