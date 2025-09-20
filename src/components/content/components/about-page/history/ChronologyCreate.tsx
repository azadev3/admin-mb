import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const ChronologyCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/tarix-xronologiya"
        title="Haqqımızda - Tarix / Xronologiya"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="chronology"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'text', multilang: true },
          {
            label: 'İl',
            placeholder: 'İl seçin',
            name: 'year',
            type: 'number',
            multilang: false,
          },
        ]}
        loadingKey="Chronology_loading"
      />
    </Box>
  );
};

export default ChronologyCreate;
