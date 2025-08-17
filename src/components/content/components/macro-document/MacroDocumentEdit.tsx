import { Box } from '@chakra-ui/react';
import FormField from '../../../../helpers/form/FormField';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import { useParams } from 'react-router-dom';

const MacroDocumentEdit: React.FC = () => {
  const { id } = useParams();

  if (!id) return <>Məlumat tapılmadı.</>;
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/makroiqtisadi-senedler-ve-hesabatlar"
        title="Makroiqtisadi Sənədlər və Hesabatlar bölməsi"
      />
      <FormField
        type="edit"
        id={Number(id)}
        contentType="multipart/form-data"
        endpoint="MacroDocument"
        fields={[
          { label: 'Icon', name: 'File', type: 'file' },
          { label: 'Başlıq (AZ)', name: 'TitleAz', type: 'text' },
          { label: 'Başlıq (EN)', name: 'TitleEn', type: 'text' },
          { label: 'Mətn (AZ)', name: 'SubTitleAz', type: 'text' },
          { label: 'Mətn (EN)', name: 'SubTitleEn', type: 'text' },
        ]}
        loadingKey="mc_loading"
      />
    </Box>
  );
};

export default MacroDocumentEdit;
