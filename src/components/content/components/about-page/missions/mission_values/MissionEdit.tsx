import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../../hooks/useLanguages';

const MissionEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/missiya-ve-deyerler-values"
        title="Haqqımızda - Missiya və Dəyərlər"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="mission"
        activeLang={activeLang}
        languages={languages}
        id={Number(id)}
        fields={[
          { label: 'Başlıq', name: 'Title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'Text', type: 'text', multilang: true },
          {
            label: 'İkon',
            name: 'File',
            type: 'file',
            accept: 'image/*',
            multilang: false,
          },
        ]}
        loadingKey="Mission_loading"
      />
    </Box>
  );
};

export default MissionEdit;
