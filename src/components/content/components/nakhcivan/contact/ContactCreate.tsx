import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const ContactCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/nakhcivan/contact"
        title="Naxçıvan Muxtar Respublikası İdarəsi - Əlaqə"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="nakhchivancontact"
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        fields={[
          { label: 'Xəritə Linki', name: 'map', type: 'text', multilang: false },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="nakhchivancontact_loading"
      />
    </Box>
  );
};

export default ContactCreate;
