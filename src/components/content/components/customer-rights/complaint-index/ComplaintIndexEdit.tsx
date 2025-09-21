import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FormField from '../../../../../shared/form/FormField';
import RouteComponentTitle from '../../../../../ui/titles/RouteComponentTitle';
import { Months } from '../../inflation/InflationValuesCreate';
import { useLanguages } from '../../../../../hooks/useLanguages';
import LanguageTabs from '../../../../../shared/form/LanguageTabs';

const ComplaintIndexEdit: React.FC = () => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/customer-rights/complaint-index/complaintindex"
        title="Müştəri Hüquqları - Şikayət İndeksləri"
      />
      <LanguageTabs
        languages={languages}
        activeLang={activeLang}
        setActiveLang={setActiveLang}
      />
      <FormField
        type="edit"
        id={Number(id)}
        endpoint="complaintindex"
        contentType="multipart/form-data"
        languages={languages}
        activeLang={activeLang}
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          { label: 'İl', name: 'year', type: 'number', multilang: false },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
          {
            label: 'Ay (seçin)',
            name: 'month',
            type: 'select',
            multilang: false,
            options: Months,
          },
          {
            label: 'Şikayət İndeksi Kateqoriyası (seçin)',
            name: 'complaintIndexCategoryId',
            type: 'select',
            multilang: false,
            optionsEndpoint: 'complaintindexcategory',
          },
        ]}
        loadingKey="complaintindex_loading"
      />
    </Box>
  );
};

export default ComplaintIndexEdit;
