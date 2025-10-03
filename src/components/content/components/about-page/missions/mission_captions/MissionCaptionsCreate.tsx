import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const MissionCaptionsCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/missiya-ve-deyerler"
        title="Haqqımızda - Missiya və Dəyərlər - Başlıq"
        endpoint="missioncaption"
        contentType="application/json"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
        ]}
        loadingKey="MissionCaption_loading"
      />
    </Box>
  );
};

export default MissionCaptionsCreate;
