import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const ContactCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/haqqimizda/elaqe" title="Haqqımızda - Əlaqə" />
      <LanguageTabs
        activeLang={activeLang}
        setActiveLang={setActiveLang}
        languages={languages}
      />
      <FormField
        type="create"
        endpoint="contact"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
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
