import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const InternationalEventEdit: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/international-cooperation/InternationalEvent"
        title="Beynəlxalq Əməkdaşlıq - Tədbirlər"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="InternationalEvent"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayllar (seçin)',
            name: 'imageFile',
            type: 'multi-file',
            multilang: true,
          },
        ]}
        loadingKey="InternationalEvent_loading"
      />
    </Box>
  );
};

export default InternationalEventEdit;
