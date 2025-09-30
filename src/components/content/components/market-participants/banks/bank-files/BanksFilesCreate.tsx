import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../../shared/form/CreateOrUpdate';

const BanksFilesCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/market-participants/banks/files"
        title="Bazar İştirakçıları - Banklar - Fayllar və Dəyərlər"
        endpoint="bankfile"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Cover Başlıq', name: 'coverTitle', type: 'text', multilang: true },
          {
            label: 'Fayl',
            name: 'File',
            type: 'file',
            multilang: false,
            accept: '.pdf,.docx,.xlsx',
          },
        ]}
        loadingKey="bankfile_loading"
      />
    </Box>
  );
};

export default BanksFilesCreate;
