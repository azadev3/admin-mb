import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import { useLanguages } from '../../../../../hooks/useLanguages';

const FinancialSearchSystemCaptionEdit: React.FC = () => {
  const { languages, activeLang, setActiveLang } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/financial-literacy/FinancialSearchSystemCaption"
        title="Maliyyə Savadlılığı - Axtarış Sistemi Başlığı"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        endpoint="FinancialSearchSystemCaption"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="FinancialSearchSystemCaption_loading"
      />
    </Box>
  );
};

export default FinancialSearchSystemCaptionEdit;
