import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const EKYCCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-innovation/EKYC"
        title="Finansal İnnovasiya - EKYC"
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
        endpoint="EKYC"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="EKYC_loading"
      />
    </Box>
  );
};

export default EKYCCreate;
