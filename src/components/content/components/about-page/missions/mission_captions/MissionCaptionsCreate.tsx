import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../../../helpers/form/FormField';

const MissionCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/haqqimizda/missiya-ve-deyerler"
        title="Haqqımızda - Missiya və Dəyərlər - Başlıq"
      />
      <FormField
        type="create"
        endpoint="MissionCaption"
        contentType="application/json"
        fields={[
          { label: 'Başlıq (AZ)', name: 'titleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'titleEn', type: 'text' },
          { label: 'Açıqlama (AZ)', name: 'textAz', type: 'text' },
          { label: 'Açıqlama (EN)', name: 'textEn', type: 'text' },
        ]}
        loadingKey="MissionCaption_loading"
      />
    </Box>
  );
};

export default MissionCaptionsCreate;
