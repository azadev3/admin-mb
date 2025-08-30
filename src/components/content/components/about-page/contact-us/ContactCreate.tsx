import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const ContactCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/haqqimizda/elaqe" title="Haqqımızda - Əlaqə" />
      <FormField
        type="create"
        endpoint="Contact"
        contentType="multipart/form-data"
        fields={[
          {
            label: 'Email',
            name: 'ContactMail',
            type: 'email',
            placeholder: 'Məs: mail@cbar.az',
          },
          {
            label: 'Qeyd (AZ)',
            name: 'NoteAz',
            type: 'text',
            placeholder: 'Məs: Vətəndaşlar Mərkəzi Bankda qəbul olunurlar.',
          },
          {
            label: 'Qeyd (EN)',
            name: 'NoteEn',
            type: 'text',
            placeholder: 'Məs: Vətəndaşlar Mərkəzi Bankda qəbul olunurlar.',
          },
          {
            label: 'Qəbula yazılma vaxtı (AZ)',
            name: 'RegistrationTimeAz',
            type: 'text',
            placeholder: 'Məs: İş günləri saat 9:00-dan 18:00-dək',
          },
          {
            label: 'Qəbula yazılma vaxtı (EN)',
            name: 'RegistrationTimeEn',
            type: 'text',
            placeholder: 'Məs: İş günləri saat 9:00-dan 18:00-dək',
          },
          {
            label: 'Xəritə (Iframe)',
            name: 'Map',
            type: 'textarea',
            placeholder:
              'Zəhmət olmasa xəritə linkini yapışdırın. Xəritə linki `<iframe> etiketi ilə başlamalıdır.`',
          },
          { label: 'Fayl', name: 'File', type: 'file' },
        ]}
        loadingKey="Contact_loading"
      />
    </Box>
  );
};

export default ContactCreate;
