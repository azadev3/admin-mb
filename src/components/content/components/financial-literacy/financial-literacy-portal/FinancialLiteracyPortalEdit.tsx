import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const FinancialLiteracyPortalEdit: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-literacy/FinancialLiteracyPortal"
        title="Maliyyə Savadlılığı - Portal"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="FinancialLiteracyPortal"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl / Fayllar',
            name: 'imageFile',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialLiteracyPortal_loading"
      />
    </Box>
  );
};

export default FinancialLiteracyPortalEdit;
