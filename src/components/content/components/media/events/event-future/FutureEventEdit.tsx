import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';

const FutureEventEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/futureevent" title="Gələcək Tədbirlər" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        contentType="application/json"
        endpoint="futureevent"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'location', type: 'text', multilang: true },
          { label: 'Format', name: 'format', type: 'text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date' },
        ]}
        loadingKey="future_events_loading"
      />
    </Box>
  );
};

export default FutureEventEdit;
