import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../../hooks/useLanguages';
import FormField from '../../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../../ui/titles/RouteComponentTitle';

const OperatorCaptionsCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/banks/operator/captions"
        title="Bazar İştirakçıları - Bank / Operator - Başlıqlar"
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
        endpoint="operatorbankcaption"
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="operatorbankcaption_loading"
      />
    </Box>
  );
};

export default OperatorCaptionsCreate;
