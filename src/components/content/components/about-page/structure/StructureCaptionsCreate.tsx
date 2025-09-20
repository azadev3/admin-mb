import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const StructureCaptionsCreate: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/teskilati-struktur"
        title="Haqqımızda - Təşkilati Struktur"
      />
      <LanguageTabs
        activeLang={activeLang}
        languages={languages}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="create"
        endpoint="structurecaption"
        contentType="application/json"
        languages={languages}
        activeLang={activeLang}
        fields={[
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="StructureCaption_loading"
      />
    </Box>
  );
};

export default StructureCaptionsCreate;
