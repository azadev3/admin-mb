import { Box, Button, Text, Image, IconButton } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface FileInputProps {
  label: string;
  name: string;
  register: any;
  error?: boolean;
  resetTrigger?: number;
}

const FileInputField: React.FC<FileInputProps> = ({
  label,
  name,
  register,
  resetTrigger,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  React.useEffect(() => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [resetTrigger]);

  return (
    <Box w="100%" display="flex" flexDirection="column" gap="8px">
      <Text fontSize="14px" color="primaryOnSite" fontWeight={500}>
        {label}
      </Text>

      {preview && (
        <Box position="relative" w="120px" h="120px" mt={2}>
          <Image
            src={preview}
            alt="Seçilen şəkil"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="8px"
            border="2px solid #dcdcdc"
          />
          <IconButton
            aria-label="Şəkili sil"
            icon={<IoCloseCircleOutline fontSize={24} />}
            size="xs"
            position="absolute"
            top="4px"
            right="4px"
            bg="rgba(0,0,0,0.6)"
            color="white"
            _hover={{ bg: 'red.500' }}
            onClick={handleRemoveImage}
          />
        </Box>
      )}

      <input
        ref={register(name).ref}
        name={name}
        type="file"
        id={name}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={e => {
          register(name).onChange(e);
          handleFileChange(e);
        }}
      />

      <Button
        as="label"
        htmlFor={name}
        cursor="pointer"
        bg="p_blue"
        maxW="25%"
        color="white"
        borderRadius="8px"
        px="24px"
        py="12px"
        fontSize={14}
        fontWeight="500"
        _hover={{
          bg: '#0b5279',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      >
        {preview ? 'Başqa şəkil seç' : 'Şəkil yüklə'}
      </Button>
    </Box>
  );
};

export default FileInputField;
