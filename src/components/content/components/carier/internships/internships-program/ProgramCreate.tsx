import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const ProgramCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/carier/intern/program"
        title="Karyera - Təcrübə Proqramları"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="internshipprogram"
        activeLang={activeLang}
        languages={languages}
        contentType="application/json"
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="internshipprogram_loading"
      />
    </Box>
  );
};

export default ProgramCreate;
