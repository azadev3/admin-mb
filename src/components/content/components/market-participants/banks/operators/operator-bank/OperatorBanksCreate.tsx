import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../../hooks/useLanguages';
import FormField from '../../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../../ui/titles/RouteComponentTitle';

const OperatorBanksCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/banks/operator/bank"
        title="Bazar İştirakçıları - Operator / Bank"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="operatorbank"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="operatorbank_loading"
      />
    </Box>
  );
};

export default OperatorBanksCreate;
