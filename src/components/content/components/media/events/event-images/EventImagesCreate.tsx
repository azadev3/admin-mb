import { Box } from '@chakra-ui/react';
import FormField from '../../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const EventImagesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/eventimage" title="Tədbirlər - Daxili Şəkillər" />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="eventimage"
        fields={[
          {
            label: 'Şəkillər',
            name: 'ImageFiles',
            type: 'multi-file',
            accept: 'image/*',
            multilang: false,
          },
          {
            name: 'EventId',
            optionsEndpoint: 'event',
            type: 'select',
            label: 'Bu şəkillər hansı tədbirin daxilində olsun? (seçin)',
            multilang: false,
          },
        ]}
        loadingKey="eventimage_loading"
      />
    </Box>
  );
};

export default EventImagesCreate;
