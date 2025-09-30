import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const GeneralInformationCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/umumi-melumat"
        title="Haqqımızda - Ümumi Məlumat"
        endpoint="About"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'descriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'descriptionEn', type: 'text' },
        ]}
        loadingKey="About_loading"
      />
    </Box>
  );
};

export default GeneralInformationCreate;
