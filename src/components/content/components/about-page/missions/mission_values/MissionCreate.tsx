import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const MissionCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/haqqimizda/missiya-ve-deyerler-values"
        title="Haqqımızda - Missiya və Dəyərlər"
        contentType="multipart/form-data"
        endpoint="mission"
        fields={[
          { label: 'Başlıq', name: 'Title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'Text', type: 'text', multilang: true },
          {
            label: 'İkon',
            name: 'File',
            type: 'file',
            accept: 'image/*',
            multilang: false,
          },
        ]}
        loadingKey="Mission_loading"
      />
    </Box>
  );
};

export default MissionCreate;
