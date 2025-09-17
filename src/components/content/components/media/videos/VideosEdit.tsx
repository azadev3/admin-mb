import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const VideosEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/videolar" title="Media - Videolar bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="video"
        activeLang={activeLang}
        languages={languages}
        id={Number(id)}
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

export default VideosEdit;
