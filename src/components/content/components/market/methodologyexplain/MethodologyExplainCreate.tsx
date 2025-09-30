import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const MethodologyExplainCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/methodologyexplain" title="Metodologiya İzahı" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="application/json"
        endpoint="methodologyexplain"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="methodologyexplain_loading"
      />
    </Box>
  );
};

export default MethodologyExplainCreate;
