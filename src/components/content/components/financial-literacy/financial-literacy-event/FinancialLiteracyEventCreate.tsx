import { Box } from '@chakra-ui/react';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const FinancialLiteracyEventCreate: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-literacy/FinancialLiteracyEvent"
        title="Maliyyə Savadlılığı - Maliyyə Savadlılığı Tədbiri"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="FinancialLiteracyEvent"
        activeLang={activeLang}
        contentType="application/json"
        languages={languages}
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date', multilang: false },
        ]}
        loadingKey="FinancialLiteracyEvent_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyEventCreate;
