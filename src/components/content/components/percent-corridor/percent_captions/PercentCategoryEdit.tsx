import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const PercentCategoryEdit: React.FC = () => {
  const { id } = useParams();
  const { setActiveLang, activeLang, languages } = useLanguages();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/faiz-dehlizi-captions"
        title="Faiz Dəhlizi - Başlıqlar"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        activeLang={activeLang}
        languages={languages}
        type="edit"
        contentType="application/json"
        id={Number(id)}
        endpoint="percentcorridorcategory"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Slug', name: 'slug', type: 'text', multilang: true },
          { label: 'Not', name: 'note', type: 'text', multilang: true },
        ]}
        loadingKey="percentcorridor-captions_loading"
      />
    </Box>
  );
};

export default PercentCategoryEdit;
