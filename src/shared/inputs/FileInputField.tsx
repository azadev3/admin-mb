import { Box, Button, Text, Image, IconButton, Link } from '@chakra-ui/react';
import React, { useState, useRef } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FaFilePdf, FaFileWord } from 'react-icons/fa';

interface FileInputProps {
  label: string;
  name: string;
  register: any;
  error?: boolean;
  resetTrigger?: number;
  accept?: any;
}

const FileInputField: React.FC<FileInputProps> = ({
  label,
  name,
  register,
  resetTrigger,
  accept,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo(file);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleRemoveFile = () => {
    setPreview(null);
    setFileInfo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  React.useEffect(() => {
    handleRemoveFile();
  }, [resetTrigger]);

  const renderPreview = () => {
    if (!fileInfo) return null;

    if (fileInfo.type.startsWith('image/')) {
      return (
        <Image
          src={preview!}
          alt="Seçilen şəkil"
          objectFit="cover"
          w="100%"
          h="100%"
          borderRadius="8px"
          border="2px solid #dcdcdc"
        />
      );
    }

    if (fileInfo.type === 'application/pdf') {
      return (
        <Link href={preview!} isExternal color="red.500">
          <FaFilePdf size={24} />
          <Text
            fontSize="sm"
            mt={1}
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              lineClamp: '1',
              overflow: 'hidden',
              maxWidth: '300px',
              width: '100%',
            }}
          >
            {fileInfo.name}
          </Text>
        </Link>
      );
    }

    if (fileInfo.name.endsWith('.docx') || fileInfo.name.endsWith('.doc')) {
      return (
        <Link href={preview!} isExternal color="blue.500">
          <FaFileWord size={48} />
          <Text fontSize="sm" mt={1}>
            {fileInfo.name}
          </Text>
        </Link>
      );
    }

    return <Text>{fileInfo.name}</Text>;
  };

  return (
    <Box w="100%" display="flex" flexDirection="column" gap="8px">
      <Text fontSize="14px" color="primaryOnSite" fontWeight={500}>
        {label}
      </Text>

      {preview && (
        <Box
          position="relative"
          w="120px"
          h="120px"
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {renderPreview()}
          <IconButton
            aria-label="Faylı sil"
            icon={<IoCloseCircleOutline fontSize={24} />}
            size="xs"
            position="absolute"
            top="4px"
            right="4px"
            bg="rgba(0,0,0,0.6)"
            color="white"
            _hover={{ bg: 'red.500' }}
            onClick={handleRemoveFile}
          />
        </Box>
      )}

      <input
        ref={register(name).ref}
        name={name}
        type="file"
        id={name}
        style={{ display: 'none' }}
        accept={accept ?? 'image/*,application/pdf,.doc,.docx'}
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
        {preview ? 'Başqa seç' : 'Yüklə'}
      </Button>
    </Box>
  );
};

export default FileInputField;
