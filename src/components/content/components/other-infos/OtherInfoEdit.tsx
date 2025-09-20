import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../hooks/useLanguages';

const OtherInfoEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/diger-melumatlar"
        title="Digər Məlumatlar bölməsi"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        contentType="application/json"
        endpoint="otherinfo"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'URL', name: 'Url', type: 'text', multilang: false },
        ]}
        loadingKey="other_info_loading"
      />
    </Box>
  );
};

export default OtherInfoEdit;
