import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';
import { TypesForDirector } from './DirectorCreate';

const DirectorEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-direktorlar"
        title="Haqqımızda - Direktorlar"
      />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="director"
        id={Number(id)}
        languages={languages}
        activeLang={activeLang}
        fields={[
          {
            label: 'Başlıq',
            name: 'fullname',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Pozisiya',
            name: 'position',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Rəhbər Növü',
            name: 'type',
            multilang: false,
            type: 'select',
            options: TypesForDirector,
          },
        ]}
        loadingKey="Director_loading"
      />
    </Box>
  );
};

export default DirectorEdit;
