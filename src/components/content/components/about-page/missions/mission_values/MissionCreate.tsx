import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../shared/form/FormField';

const MissionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/missiya-ve-deyerler-values"
        title="Haqqımızda - Missiya və Dəyərlər"
      />
      <FormField
        type="create"
        contentType="multipart/form-data"
        endpoint="Mission"
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

export default MissionCreate;
