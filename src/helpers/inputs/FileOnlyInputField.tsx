import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Text, IconButton } from '@chakra-ui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface FileOnlyInputProps {
  label: string;
  name: string;
  register?: any;
  setValue: (name: string, value: any) => void;
  resetTrigger?: number;
}

const FileOnlyInputField: React.FC<FileOnlyInputProps> = ({
  label,
  name,
  setValue,
  resetTrigger,
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue(name, file); 
    if (file) {
      setFileName(file.name);
      setFileUrl(URL.createObjectURL(file));
    } else {
      setFileName(null);
      setFileUrl(null);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setFileUrl(null);
    setValue(name, null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    handleRemoveFile();
  }, [resetTrigger]);

  return (
    <Box w="100%" display="flex" flexDirection="column" gap="8px">
      <Text fontSize="14px" color="primaryOnSite" fontWeight={500}>
        {label}
      </Text>

      {fileName && (
        <Box position="relative" border="1px solid #dcdcdc" borderRadius="8px" p={2}>
          <Text fontSize="12px">{fileName}</Text>
          <a href={fileUrl || '#'} target="_blank" rel="noopener noreferrer">Aç</a>
          <IconButton
            aria-label="Faylı sil"
            icon={<IoCloseCircleOutline fontSize={20} />}
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
        ref={fileInputRef}
        name={name}
        type="file"
        id={name}
        style={{ display: 'none' }}
        accept=".pdf,.doc,.docx,.txt,.xlsx"
        onChange={handleFileChange} 
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
        {fileName ? 'Başqa fayl seç' : 'Fayl yüklə'}
      </Button>
    </Box>
  );
};

export default FileOnlyInputField;
