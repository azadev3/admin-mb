import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const VideosCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/videolar" title="Media - Videolar bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="video"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Tarix', name: 'Date', type: 'date' },
          { label: 'URL', name: 'Url', type: 'text' },
          {
            label: 'Video Fayl yaxud Şəkil',
            name: 'File',
            type: 'file',
            accept: 'image/*,video/*',
          },
        ]}
        loadingKey="videos_loading"
      />
    </Box>
  );
};

export default VideosCreate;
