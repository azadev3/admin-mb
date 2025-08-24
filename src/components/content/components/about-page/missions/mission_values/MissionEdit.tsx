import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../helpers/form/FormField';

const MissionEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/missiya-ve-deyerler-values"
        title="Haqqımızda - Missiya və Dəyərlər"
      />
      <FormField
        type="edit"
        contentType="multipart/form-data"
        endpoint="Mission"
        id={Number(id)}
        fields={[
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'DescriptionAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'DescriptionEn', type: 'text' },
          { label: 'İkon', name: 'File', type: 'file' },
        ]}
        loadingKey="Mission_loading"
      />
    </Box>
  );
};

export default MissionEdit;
