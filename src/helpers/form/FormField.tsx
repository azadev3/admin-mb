import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Input, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import FileInputField from '../inputs/FileInputField';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoadingState } from '../../atoms/atoms';
import Loader from '../../ui/Loader';
import { apiRequest } from '../../config/apiRequest';

export interface FieldDefinition {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'file' | 'textarea';
}

interface FormFieldProps {
  type: 'create' | 'edit';
  endpoint: string; // API endpoint
  id?: number; // for edit
  fields: FieldDefinition[];
  loadingKey: string;
}

const FormField: React.FC<FormFieldProps> = ({ type, endpoint, id, fields, loadingKey }) => {
  const [initialData, setInitialData] = useState<any>({});
  const setLoading = useSetRecoilState(LoadingState);
  const loading = useRecoilValue(LoadingState);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });

  useEffect(() => {
    if (type === 'edit' && id) {
      const fetchData = async () => {
        setLoading(prev => ({ ...prev, [loadingKey]: true }));
        try {
          const res = await apiRequest({
            endpoint: `${endpoint}/${id}`,
            method: 'get',
          });
          setInitialData(res);
          reset(res);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(prev => ({ ...prev, [loadingKey]: false }));
        }
      };
      fetchData();
    }
  }, [type, id, endpoint, reset, setLoading, loadingKey]);

  const onSubmitHandler = async (data: any) => {
    setLoading(prev => ({ ...prev, [loadingKey]: true }));

    try {
      const formData = new FormData();
      fields.forEach(field => {
        if (field.type === 'file' && data[field.name]?.[0]) {
          formData.append(field.name, data[field.name][0]);
        } else if (data[field.name] !== undefined) {
          formData.append(field.name, data[field.name]);
        }
      });

      const url = type === 'create' ? endpoint : `${endpoint}/${id}`;
      const method = type === 'create' ? 'post' : 'put';

      await apiRequest({
        endpoint: url,
        method,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(prev => ({ ...prev, [loadingKey]: false }));
    }
  };

  return (
    <Box as="form" w="full" onSubmit={handleSubmit(onSubmitHandler)}>
      <Box display="flex" flexDirection="column" gap={4} p={4} mt={4}>
        {fields.map(field => {
          if (field.type === 'file') {
            return (
              <FileInputField
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                error={!!errors[field.name]}
                resetTrigger={0}
              />
            );
          } else if (field.type === 'textarea') {
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel fontSize="14px" fontWeight={500}>
                  {field.label}
                </FormLabel>
                <Textarea
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  bg="#f3f3f3"
                  borderRadius="10px"
                  border="2px solid #dcdcdc"
                  _focus={{
                    border: '2px solid #094160',
                    bg: 'white',
                    boxShadow: '0 0 0 4px rgba(89, 120, 204, 0.2)',
                  }}
                />
              </FormControl>
            );
          } else {
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel fontSize="14px" fontWeight={500}>
                  {field.label}
                </FormLabel>
                <Input
                  {...register(field.name)}
                  placeholder={field.placeholder}
                  type={field.type || 'text'}
                  bg="#f3f3f3"
                  borderRadius="10px"
                  border="2px solid #dcdcdc"
                  _focus={{
                    border: '2px solid #094160',
                    bg: 'white',
                    boxShadow: '0 0 0 4px rgba(89, 120, 204, 0.2)',
                  }}
                />
              </FormControl>
            );
          }
        })}

        <Box display="flex" justifyContent="center" w="100%" pt={3}>
          {loading[loadingKey] ? (
            <Loader />
          ) : (
            <Button
              type="submit"
              w="100%"
              bg="primaryOnSite"
              color="white"
              fontWeight={600}
              fontSize="16px"
              borderRadius="8px"
              _hover={{
                bg: 'primary',
                color: 'primaryOnSite',
                border: '1px solid',
              }}
            >
              {type === 'create' ? 'Yarat' : 'Dəyişdir'}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FormField;
