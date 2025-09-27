import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const StaffArticleFileEdit: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/publications/StaffArticleFile"
        title="Nəşrlər və Tədqiqatlar - İşçilər Məqaləsi - Fayl"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="StaffArticleFile"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: '.xlsx,.xls,.docx,.doc,.word,.pdf',
          },
          {
            label: 'İşçilər Məqaləsi (seçin)',
            name: 'StaffArticleId',
            type: 'select',
            optionsEndpoint: 'StaffArticle',
            multilang: false,
          },
        ]}
        loadingKey="StaffArticleFile_loading"
      />
    </Box>
  );
};

export default StaffArticleFileEdit;
