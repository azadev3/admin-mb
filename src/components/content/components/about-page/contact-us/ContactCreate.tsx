import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const ContactCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        endpoint="contact"
        backRoute="/haqqimizda/elaqe"
        title="Haqqımızda - Əlaqə"
        contentType="multipart/form-data"
        fields={[
          {
            label: 'Email',
            name: 'contactMail',
            type: 'email',
            customPluralKey: 'contactMail',
            placeholder: 'Məs: mail@cbar.az',
            multilang: false,
          },
          {
            label: 'Qeyd',
            name: 'note',
            type: 'text',
            multilang: true,
            placeholder: 'Məs: Vətəndaşlar Mərkəzi Bankda qəbul olunurlar.',
          },
          {
            label: 'Qəbula yazılma vaxtı',
            multilang: true,
            name: 'registrationTime',
            type: 'text',
            placeholder: 'Məs: İş günləri saat 9:00-dan 18:00-dək',
          },
          {
            label: 'Xəritə (Iframe)',
            name: 'map',
            type: 'textarea',
            multilang: false,
            placeholder:
              'Zəhmət olmasa xəritə linkini yapışdırın. Xəritə linki `<iframe> etiketi ilə başlamalıdır.`',
          },
          { label: 'Fayl', name: 'File', type: 'file', multilang: false, accept: '.pdf' },
        ]}
        loadingKey="Contact_loading"
      />
    </Box>
  );
};

export default ContactCreate;
