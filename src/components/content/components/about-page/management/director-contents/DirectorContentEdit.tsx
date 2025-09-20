import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';

const DirectorContentEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/director-content"
        title="Direktorlar Daxili Content"
      />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="directordetail"
        id={Number(id)}
        languages={languages}
        activeLang={activeLang}
        fields={[
          {
            label: 'Başlıq',
            name: 'title',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Açıqlama',
            name: 'description',
            type: 'rich-text',
            multilang: true,
          },
          {
            label: "Bu məlumat hansı Direktor'a aiddir?",
            type: 'select',
            multilang: false,
            name: 'directorId',
            optionsEndpoint: 'director',
          },
        ]}
        loadingKey="Director-content_loading"
      />
    </Box>
  );
};

export default DirectorContentEdit;
