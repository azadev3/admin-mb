import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const BanksFilesCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/market-participants/banks/files"
        title="Bazar İştirakçıları - Banklar - Fayllar və Dəyərlər"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        endpoint="bankfile"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
        ]}
        loadingKey="bankfile_loading"
      />
    </Box>
  );
};

export default BanksFilesCreate;
