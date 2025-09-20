import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';
import LanguageTabs from '../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../hooks/useLanguages';

const OtherInfoCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/diger-melumatlar"
        title="Digər Məlumatlar bölməsi"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="otherinfo"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'URL', name: 'Url', type: 'text', multilang: false },
        ]}
        loadingKey="other_info_loading"
      />
    </Box>
  );
};

export default OtherInfoCreate;
