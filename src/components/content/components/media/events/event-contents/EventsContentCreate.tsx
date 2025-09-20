import { Box } from '@chakra-ui/react';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const EventsContentCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/eventcontent"
        title="Tədbirlər - Daxili Açıqlama bölməsi"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="eventcontent"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Şəkillər',
            name: 'ImageFiles',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
          {
            name: 'EventId',
            optionsEndpoint: 'event',
            type: 'select',
            label: 'Bu bölmə hansı tədbirin daxili açıqlamasıdır? (seçin)',
          },
        ]}
        loadingKey="events_content_loading"
      />
    </Box>
  );
};

export default EventsContentCreate;
