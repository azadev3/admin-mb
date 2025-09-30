import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../../../../hooks/useLanguages';
import FormField from '../../../../../shared/form/FormField';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';

const MeasEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/meas/MEAS"
        title="MEAS - Məlumatların Elektron Açıqlanması Sistemi"
      />
      <LanguageTabs
        languages={languages}
        setActiveLang={setActiveLang}
        activeLang={activeLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="meas"
        contentType="multipart/form-data"
        activeLang={activeLang}
        languages={languages}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          {
            label: 'Qeydiyyat Vaxtı',
            name: 'RegisterTime',
            type: 'date',
            multilang: false,
          },
          {
            label: 'Qeydiyyat Nömrəsi',
            name: 'RegisterNumber',
            type: 'number',
            multilang: false,
          },
          {
            label: 'Emitent Növü (seçin)',
            name: 'issuerTypeId',
            optionsEndpoint: 'issuertype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Məlumat Növü (seçin)',
            name: 'informationTypeId',
            optionsEndpoint: 'informationtype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Qiymətli Kağız Növü (seçin)',
            name: 'SecurityTypeId',
            optionsEndpoint: 'securitytype',
            type: 'select',
            multilang: false,
          },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            accept: '.pdf,.docx,.doc,.xlsx,.xls',
            multilang: false,
          },
        ]}
        loadingKey="meas_loading"
      />
    </Box>
  );
};

export default MeasEdit;
