import { Box } from '@chakra-ui/react';
import FormField from '../../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const DigitalPortalCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/digital-portal-cards"
        title="Digital Portal - Əlavə Et"
      />
      <FormField
        type="create"
        endpoint="DigitalPortal"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Mətn (AZ)', name: 'subTitleAz', type: 'text' },
          { label: 'Mətn (EN)', name: 'subTitleEn', type: 'text' },
        ]}
        loadingKey="DigitalPortal_loading"
      />
    </Box>
  );
};

export default DigitalPortalCreate;
