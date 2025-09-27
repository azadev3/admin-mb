import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const CustomEditingModeCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-innovation/CustomEditingMode"
        title="Finansal İnnovasiya - Xüsusi Redaktə Modu"
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
        endpoint="CustomEditingMode"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="CustomEditingMode_loading"
      />
    </Box>
  );
};

export default CustomEditingModeCreate;
