import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';
import FormField from '../../../../shared/form/FormField';
import { useLanguages } from '../../../../hooks/useLanguages';
import LanguageTabs from '../../../../shared/form/LanguageTabs';

const TranslatesEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute="/tercumeler" title="Saytın Ümumi Tərcümələri" />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="translate"
        contentType="application/json"
        activeLang={activeLang}
        languages={languages}
        fields={[
          {
            label: 'Key (açar söz)',
            placeholder: 'Məsələn: home_title',
            name: 'key',
            type: 'text',
            multilang: false,
            isNoEditable: true,
          },
          {
            label: 'Dəyər',
            placeholder: 'Məsələn: Ana Səhifə',
            name: 'value',
            type: 'text',
            multilang: true,
          },
        ]}
        loadingKey="translates_loading"
      />
    </Box>
  );
};

export default TranslatesEdit;
