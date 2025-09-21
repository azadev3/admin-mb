import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const CategoryCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/customer-rights/citizencategory"
        title="Müştəri Hüquqları - Vətəndaş Müraciəti Kateqoriyası"
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
        endpoint="citizenapplicationcategory"
        contentType="application/json"
        fields={[
          { label: 'Kateqoriyanın Adı', name: 'title', type: 'text', multilang: true },
        ]}
        loadingKey="citizenapplicationcategory_loading"
      />
    </Box>
  );
};

export default CategoryCreate;
