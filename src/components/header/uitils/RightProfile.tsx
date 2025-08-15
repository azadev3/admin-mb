import React from 'react';
import { Box, IconButton, Image, useColorMode } from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';

const RightProfile: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={2}
      position="relative"
    >
      {/* Search Button */}
      <IconButton
        aria-label="Search"
        icon={<CiSearch size={28} />}
        borderRadius="full"
        w="40px"
        h="40px"
        bg={colorMode === 'light' ? '#f5f7fa' : 'gray.700'}
        _hover={{ bg: 'primary_hover' }}
      />

      {/* Settings Button */}
      <IconButton
        aria-label="Settings"
        icon={<Image src="/settings.svg" alt="settings" />}
        borderRadius="full"
        w="40px"
        h="40px"
        bg={colorMode === 'light' ? '#f5f7fa' : 'gray.700'}
        _hover={{ bg: 'primary_hover' }}
      />
    </Box>
  );
};

export default RightProfile;
