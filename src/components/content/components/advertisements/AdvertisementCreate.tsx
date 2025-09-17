import { Box } from '@chakra-ui/react';
import FormField from '../../../../shared/form/FormField';
import { MainSeoSchemaOnlyMeta } from '../../../../shared/MainSchemaConfig';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../hooks/useLanguages';

const AdvertisementCreate: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/elanlar" title="Ana Səhifə - Elanlar bölməsi" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="advertisement"
        activeLang={activeLang}
        languages={languages}
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

export default AdvertisementCreate;
