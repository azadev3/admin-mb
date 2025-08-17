import { Box, Button, Text, Image, IconButton } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface FileMultiInputProps {
  label: string;
  name: string;
  register: any;
  setValue: any; 
  resetTrigger?: number;
}

const FileMultiInputField: React.FC<FileMultiInputProps> = ({
  label,
  name,
  setValue,
  resetTrigger,
}) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles(selectedFiles);
    setValue(name, selectedFiles);

    selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setFiles(newFiles);
    setPreviews(newPreviews);
    setValue(name, newFiles);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    setPreviews([]);
    setFiles([]);
    setValue(name, []);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [resetTrigger, setValue, name]);

  return (
    <Box w="100%" display="flex" flexDirection="column" gap="8px">
      <Text fontSize="14px" fontWeight={500}>
        {label}
      </Text>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {previews.map((src, i) => (
          <Box key={i} position="relative" w="100px" h="100px">
            <Image src={src} w="100%" h="100%" objectFit="cover" borderRadius="8px" />
            <IconButton
              aria-label="remove"
              icon={<IoCloseCircleOutline />}
              size="xs"
              position="absolute"
              top="4px"
              right="4px"
              onClick={() => handleRemove(i)}
            />
          </Box>
        ))}
      </Box>

      <input
        ref={fileInputRef}
        type="file"
        id={name}
        name={name}
        style={{ display: 'none' }}
        accept="image/*"
        multiple
        onChange={handleFilesChange}
      />

      <Button as="label" htmlFor={name} bg="p_blue" color="white" borderRadius="8px">
        Foto yüklə
      </Button>
    </Box>
  );
};

export default FileMultiInputField;
