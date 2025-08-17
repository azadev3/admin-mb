import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';

const OtherInfoCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/diger-melumatlar" title="Digər Məlumatlar bölməsi" />
      <FormField
        type="create"
        endpoint="OtherInfo"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'URL', name: 'Url', type: 'text' },
        ]}
        loadingKey="other_info_loading"
      />
    </Box>
  );
};

export default OtherInfoCreate;
