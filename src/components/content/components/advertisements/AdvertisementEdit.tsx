import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import { MainSeoSchemaOnlyMeta } from '../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useLanguages } from '../../../../hooks/useLanguages';
import LanguageTabs from '../../../../shared/form/LanguageTabs';

const AdvertisementEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/elanlar" title="Ana Səhifə - Elanlar bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="advertisement"
        activeLang={activeLang}
        languages={languages}
        id={Number(id)}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Sloqan (Qısa Açıqlama)',
            name: 'shortDescription',
            type: 'text',
            multilang: true,
          },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          { label: 'Tarix', name: 'date', type: 'date' },
          ...MainSeoSchemaOnlyMeta,
        ]}
        loadingKey="advertisements_loading"
      />
    </Box>
  );
};

export default AdvertisementEdit;
