import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';
import { useLanguages } from '../../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../../shared/form/LanguageTabs';

const FormerChairmenEdit: React.FC = () => {
  const { activeLang, setActiveLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/idareetme-sabiq-sedrler"
        title="Haqqımızda - Sabiq Sədrlər"
      />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="edit"
        contentType="application/json"
        endpoint="formerchairman"
        id={Number(id)}
        activeLang={activeLang}
        languages={languages}
        fields={[
          {
            label: 'Tam Ad / Soyad',
            name: 'fullname',
            type: 'text',
            multilang: true,
          },
          {
            label: 'Açıqlama',
            name: 'description',
            type: 'text',
            multilang: true,
          },
        ]}
        loadingKey="formerchairman_loading"
      />
    </Box>
  );
};

export default FormerChairmenEdit;
