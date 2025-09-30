import { Box } from '@chakra-ui/react';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const BlogCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/nakhcivan/blog"
        title="Naxçıvan Muxtar Respublikası İdarəsi - Bloqlar"
        endpoint="nakhchivanblog"
        contentType="multipart/form-data"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Açıqlama', name: 'description', type: 'rich-text', multilang: true },
          {
            label: 'Fayl',
            name: 'file',
            type: 'multi-file',
            multilang: false,
            accept: 'image/*',
          },
        ]}
        loadingKey="nakhchivanblog_loading"
      />
    </Box>
  );
};

export default BlogCreate;
