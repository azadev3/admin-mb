import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';

const MediaQueryCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/mediaquery" title="Media Sorğular" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        endpoint="mediaquery"
        fields={[
          { label: 'Email', name: 'email', type: 'email', multilang: false },
          { label: 'Telefon', name: 'phone', type: 'text', multilang: false },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="mediaquery_loading"
      />
    </Box>
  );
};

export default MediaQueryCreate;
