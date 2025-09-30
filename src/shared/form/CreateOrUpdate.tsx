import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useLanguages } from '../../hooks/useLanguages';
import RouteComponentTitle from '../../ui/titles/RouteComponentTitle';
import FormField, { type FieldDefinition, type GeneralContentType } from './FormField';
import LanguageTabs from './LanguageTabs';

interface CreateOrUpdateProps {
  endpoint: string;
  title: string;
  backRoute: string;
  fields: FieldDefinition[];
  loadingKey: string;
  contentType: GeneralContentType;
}

const CreateOrUpdate: React.FC<CreateOrUpdateProps> = ({
  endpoint,
  title,
  backRoute,
  fields,
  loadingKey,
  contentType,
}) => {
  const { setActiveLang, activeLang, languages } = useLanguages();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const isMultilang = fields.some(item => item.multilang);

  return (
    <Box w="full" p={4} bg="gray.50" borderRadius="md">
      <RouteComponentTitle backRoute={backRoute} title={title} />

      {isMultilang && (
        <LanguageTabs
          languages={languages}
          setActiveLang={setActiveLang}
          activeLang={activeLang}
        />
      )}

      {isMultilang ? (
        <FormField
          type={isEdit ? 'edit' : 'create'}
          id={isEdit ? Number(id) : undefined}
          contentType={contentType ?? 'multipart/form-data'}
          endpoint={endpoint}
          activeLang={activeLang}
          languages={languages}
          fields={fields ?? []}
          loadingKey={`${loadingKey}_${isEdit ? 'edit' : 'create'}`}
        />
      ) : (
        <FormField
          type={isEdit ? 'edit' : 'create'}
          id={isEdit ? Number(id) : undefined}
          contentType={contentType ?? 'multipart/form-data'}
          endpoint={endpoint}
          fields={fields ?? []}
          loadingKey={`${loadingKey}_${isEdit ? 'edit' : 'create'}`}
        />
      )}
    </Box>
  );
};

export default CreateOrUpdate;
