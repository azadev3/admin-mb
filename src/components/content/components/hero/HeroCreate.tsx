import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';
const HeroCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/hero" title="Hero Bölməsini Əlavə Et" />
      <FormField
        type="create"
        endpoint="Hero"
        fields={[
          { label: 'Şəkil', name: 'File', type: 'file' },
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
        ]}
        loadingKey="hero_loading"
      />
    </Box>
  );
};

export default HeroCreate;
