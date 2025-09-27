import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const OpenBankingCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-innovation/OpenBanking"
        title="Finansal İnnovasiya - Açıq Bankçılıq"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        endpoint="OpenBanking"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="OpenBanking_loading"
      />
    </Box>
  );
};

export default OpenBankingCreate;
