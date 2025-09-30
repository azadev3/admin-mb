import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const SecurityTypeEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/meas/security-type"
        title="MEAS - Qiymətli Kağız Növü"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="securitytype"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[{ label: 'Başlıq', name: 'title', type: 'text', multilang: true }]}
        loadingKey="securitytype_loading"
      />
    </Box>
  );
};

export default SecurityTypeEdit;
