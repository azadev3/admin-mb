import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const DigitalPortalCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/digital-portal-texts"
        title="Digital Portal - Mətn və Başlıq Əlavə Et"
      />
      <FormField
        type="create"
        endpoint="DigitalPortalCaption"
        contentType='application/json'
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Mətn (AZ)', name: 'subTitleAz', type: 'text' },
          { label: 'Mətn (EN)', name: 'subTitleEn', type: 'text' },
        ]}
        loadingKey="DigitalPortalCaption_loading"
      />
    </Box>
  );
};

export default DigitalPortalCaptionsCreate;
