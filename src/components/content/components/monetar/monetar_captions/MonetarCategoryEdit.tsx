import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import CreateOrUpdate from '../../../../../shared/form/CreateOrUpdate';

const MonetarCategoryEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <CreateOrUpdate
        backRoute="/monetar-gostericiler-captions"
        title="Monetar Göstəricilər - Başlıqlar"
        contentType="application/json"
        endpoint="monetaryindicatorcategory"
        fields={[
          { label: 'Başlıq', name: 'title', type: 'text', multilang: true },
          { label: 'Slug', name: 'slug', type: 'text', multilang: true },
          { label: 'Not', name: 'note', type: 'text', multilang: true },
        ]}
        loadingKey="MonetaryCategory_loading"
      />
    </Box>
  );
};

export default MonetarCategoryEdit;
