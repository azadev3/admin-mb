import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';
import LanguageTabs from '../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../hooks/useLanguages';

const PhonesCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/telefonlar" title="Footar Telefonlar bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="phone"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Telefon Nömrəsi',
            name: 'contactNumber',
            type: 'text',
            multilang: false,
          },
        ]}
        loadingKey="phones_loading"
      />
    </Box>
  );
};

export default PhonesCreate;
