import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../../hooks/useLanguages';

const BanksCaptionsCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/banks/captions"
        title="Bazar İştirakçıları - Bank - Başlıqlar"
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
        endpoint="bankcaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="bankcaption_loading"
      />
    </Box>
  );
};

export default BanksCaptionsCreate;
