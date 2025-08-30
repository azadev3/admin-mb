import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Select,
} from '@chakra-ui/react';
import FileInputField from '../inputs/FileInputField';
import FileMultiInputField from '../inputs/FileMultiInputField';
import FileOnlyInputField from '../inputs/FileOnlyInputField';
import Loader from '../../ui/Loader';
import { apiRequest } from '../../config/apiRequest';
import { slugify } from '../Slugify';
import { toastdev } from '@azadev/react-toastdev';
import { parseDateToInput } from '../parseDateToInput';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/features/uiSlice';
import type { RootState } from '../../store/store';

export interface FieldDefinition {
  label: string;
  name: string;
  placeholder?: string;
  type?:
    | 'text'
    | 'email'
    | 'file'
    | 'multi-file'
    | 'other_files'
    | 'textarea'
    | 'date'
    | 'boolean'
    | 'select'
    | 'number'
    | 'rich-text';
  optionsEndpoint?: string;
  options?: { label: string; value: string | number }[];
}

interface FormFieldProps {
  type: 'create' | 'edit';
  endpoint: string;
  id?: number;
  fields: FieldDefinition[];
  loadingKey: string;
  contentType?: 'multipart/form-data' | 'application/json';
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  endpoint,
  id,
  fields,
  loadingKey,
  contentType,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.ui.loading);
  const [resetTrigger, setResetTrigger] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: '' }),
      {} as any,
    ),
  });

  const fetchData = async () => {
    if (!id) return;
    dispatch(setLoading({ key: loadingKey, value: true }));
    try {
      const res = await apiRequest({
        endpoint: `${endpoint}/${id}`,
        method: 'get',
      });
      const filledData: any = {};

      fields.forEach(field => {
        if (field.name.toLowerCase() === 'id') return;
        const apiKeys = [
          field.name,
          field.name.charAt(0).toLowerCase() + field.name.slice(1),
        ];

        let value: any = undefined;
        for (let key of apiKeys) {
          if (res[key] !== undefined) {
            value = res[key];
            break;
          }
        }

        if (field.type === 'boolean') value = value ? 'true' : 'false';
        if (field.type === 'date' && value) value = parseDateToInput(value);

        if (field.type === 'file') {
          setValue(field.name, value ? [value] : []);
          return;
        }
        if (field.type === 'multi-file') {
          setValue(
            field.name,
            Array.isArray(value) ? value : value ? [value] : [],
          );
          return;
        }

        filledData[field.name] = value ?? '';
      });

      reset(filledData);
    } catch (err: any) {
      const msg = err?.message || JSON.stringify(err);
      toastdev.error(msg, { sound: true });
      console.error(err);
    } finally {
      dispatch(setLoading({ key: loadingKey, value: false }));
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      fetchData();
    } else if (type === 'create') {
      reset(
        fields.reduce(
          (acc, field) => ({ ...acc, [field.name]: '' }),
          {} as any,
        ),
      );
    }
  }, [type, id, endpoint, reset, setValue]);

  const onSubmitHandler = async (data: any) => {
    const hasValue = Object.values(data).some(value =>
      Array.isArray(value)
        ? value.length > 0
        : value != '' && value !== null && value !== undefined,
    );
    if (!hasValue) {
      toastdev.info('Əlavə etmək üçün ən az bir mövcud məlumat olmalıdır.', {
        sound: true,
      });
      return;
    }

    dispatch(setLoading({ key: loadingKey, value: true }));
    try {
      const formData = new FormData();
      if (type === 'edit' && id) formData.append('id', String(id));

      fields.forEach(field => {
        if (field.name.toLowerCase() === 'id') return;

        if (field.type === 'multi-file' && data[field.name]?.length) {
          data[field.name].forEach((file: File) =>
            formData.append(field.name, file),
          );
        } else if (field.type === 'file' && data[field.name]?.[0]) {
          formData.append(field.name, data[field.name][0]);
        } else if (field.type === 'other_files' && data[field.name]) {
          formData.append(field.name, data[field.name]);
        } else if (
          data[field.name] !== undefined &&
          data[field.name] !== null
        ) {
          formData.append(field.name, data[field.name]);
        }
      });

      const url = type === 'create' ? endpoint : `${endpoint}/${id}`;
      const method = type === 'create' ? 'post' : 'put';

      await apiRequest({
        endpoint: url,
        method,
        data: formData,
        headers: { 'Content-Type': contentType ?? 'multipart/form-data' },
      });

      toastdev.success(type === 'create' ? 'Yaradıldı!' : 'Dəyişdirildi!', {
        sound: false,
      });

      if (type === 'edit') fetchData();
      else
        reset(
          fields.reduce(
            (acc, field) => ({ ...acc, [field.name]: '' }),
            {} as any,
          ),
        );

      setResetTrigger(prev => prev + 1);
    } catch (err: any) {
      const msg = err?.message || JSON.stringify(err);
      toastdev.error(msg, { sound: true });
      console.error(err);
    } finally {
      dispatch(setLoading({ key: loadingKey, value: false }));
    }
  };

  // Dynamic options
  const [dynamicOptions, setDynamicOptions] = useState<{
    [key: string]: any[];
  }>({});

  useEffect(() => {
    fields.forEach(async field => {
      if (field.type === 'select' && field.optionsEndpoint) {
        try {
          const res = await apiRequest({
            endpoint: field.optionsEndpoint,
            method: 'get',
          });
          const opts = res.map((item: any) => ({
            label:
              item.name ??
              item.title ??
              item.titleAz ??
              item.TitleAz ??
              item.id,
            value: item.id,
          }));
          setDynamicOptions(prev => ({ ...prev, [field.name]: opts }));
        } catch (err) {
          console.error('Options fetch failed:', err);
        }
      }
    });
  }, [fields]);

  // Auto-slug
  const titleAz = watch('TitleAz');
  const titleEn = watch('TitleEn');
  const titleAzLower = watch('titleAz');
  const titleEnLower = watch('titleEn');

  useEffect(() => {
    if (titleAz) setValue('SlugAz', slugify(titleAz));
  }, [titleAz, setValue]);
  useEffect(() => {
    if (titleEn) setValue('SlugEn', slugify(titleEn));
  }, [titleEn, setValue]);
  useEffect(() => {
    if (titleAzLower) setValue('slugAz', slugify(titleAzLower));
  }, [titleAzLower, setValue]);
  useEffect(() => {
    if (titleEnLower) setValue('slugEn', slugify(titleEnLower));
  }, [titleEnLower, setValue]);

  return (
    <Box as="form" w="full" onSubmit={handleSubmit(onSubmitHandler)}>
      <Box display="flex" flexDirection="column" gap={4} p={4} mt={4}>
        {fields.map(field => {
          if (field.type === 'file')
            return (
              <FileInputField
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                error={!!errors[field.name]}
                resetTrigger={resetTrigger}
              />
            );
          if (field.type === 'textarea')
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
                    boxShadow: '0 0 0 4px rgba(89,120,204,0.2)',
                  }}
                />
              </FormControl>
            );
          if (field.type === 'rich-text')
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel fontSize="14px" fontWeight={500}>
                  {field.label}
                </FormLabel>
              </FormControl>
            );
          if (field.type === 'boolean')
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel>{field.label}</FormLabel>
                <Select placeholder="Seçin" {...register(field.name)}>
                  <option value="true">Bəli</option>
                  <option value="false">Xeyr</option>
                </Select>
              </FormControl>
            );
          if (field.type === 'date')
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel>{field.label}</FormLabel>
                <Input {...register(field.name)} type="date" />
              </FormControl>
            );
          if (field.type === 'number')
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel>{field.label}</FormLabel>
                <Input
                  {...register(field.name)}
                  type="number"
                  step="any"
                  placeholder={field.placeholder}
                />
              </FormControl>
            );
          if (field.type === 'select')
            return (
              <FormControl key={field.name} isInvalid={!!errors[field.name]}>
                <FormLabel>{field.label}</FormLabel>
                <Select
                  placeholder="Seçin"
                  {...register(field.name)}
                  bg="#f3f3f3"
                  borderRadius="10px"
                >
                  {(field.options || dynamicOptions[field.name] || []).map(
                    opt => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ),
                  )}
                </Select>
              </FormControl>
            );
          if (field.type === 'multi-file')
            return (
              <FileMultiInputField
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                setValue={setValue}
                resetTrigger={resetTrigger}
              />
            );
          if (field.type === 'other_files')
            return (
              <FileOnlyInputField
                key={field.name}
                label={field.label}
                name={field.name}
                setValue={setValue}
                resetTrigger={resetTrigger}
              />
            );
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
                  boxShadow: '0 0 0 4px rgba(89,120,204,0.2)',
                }}
              />
            </FormControl>
          );
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
