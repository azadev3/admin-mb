import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const OfficeEit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/office" title="Office" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
        endpoint="office"
        id={Number(id)}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Ünvan', name: 'addresse', type: 'text', multilang: true },
          { label: 'Sədrlər', name: 'chairmen', type: 'text', multilang: true },
          { label: 'Telefon', name: 'phone', type: 'number', multilang: false },
          {
            label: 'Şəkil',
            name: 'ImageFile',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
          {
            label: 'Digər Fayl',
            name: 'StatuteFile',
            type: 'file',
            multilang: false,
            accept: '.pdf',
          },
        ]}
        loadingKey="office_loading"
      />
    </Box>
  );
};

export default OfficeEit;
