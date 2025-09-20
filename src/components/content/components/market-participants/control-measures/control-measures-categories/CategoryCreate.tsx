import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../../hooks/useLanguages';

const CategoryCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/control-measure/category"
        title="Bazar İştirakçıları - Tətbiq Edilmiş Nəzarət Tədbirləri - Kateqoriyalar"
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
        endpoint="controlmeasurecategory"
        contentType="application/json"
        fields={[
          { label: 'Kateqoriyanın Adı', name: 'title', type: 'text', multilang: true },
        ]}
        loadingKey="controlmeasurecategory_loading"
      />
    </Box>
  );
};

export default CategoryCreate;
