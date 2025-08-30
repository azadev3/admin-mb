import { Box } from '@chakra-ui/react';
import RouteComponentTitle from '../../../../ui/titles/RouteComponentTitle';
import FormField from '../../../../shared/form/FormField';

const MacroDocumentCreate: React.FC = () => {
  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle
        backRoute="/makroiqtisadi-senedler-ve-hesabatlar"
        title="Makroiqtisadi Sənədlər və Hesabatlar bölməsi"
      />
      <FormField
        type="create"
        endpoint="MacroDocument"
        contentType="multipart/form-data"
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

export default MacroDocumentCreate;
