import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Image,
  useColorMode,
  VStack,
  Button,
  Collapse,
  useOutsideClick,
} from '@chakra-ui/react';
// import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const RightProfile: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={2}
      position="relative"
    >
      {/* Search Button */}
      {/* <IconButton
        aria-label="Search"
        icon={<CiSearch size={28} />}
        borderRadius="full"
        w="40px"
        h="40px"
        bg={colorMode === 'light' ? '#f5f7fa' : 'gray.700'}
        _hover={{ bg: 'primary_hover' }}
      /> */}

      {/* Settings Button */}
      <Box position="relative" ref={dropdownRef}>
        <IconButton
          aria-label="Settings"
          icon={<Image src="/settings.svg" alt="settings" />}
          borderRadius="full"
          w="40px"
          h="40px"
          bg={colorMode === 'light' ? '#f5f7fa' : 'gray.700'}
          _hover={{ bg: 'primary_hover' }}
          onClick={() => setIsOpen(prev => !prev)}
        />

        <Collapse in={isOpen} animateOpacity>
          <VStack
            position="absolute"
            right={0}
            mt={2}
            p={2}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            borderRadius="md"
            shadow="md"
            spacing={1}
            zIndex={100000000000}
            minW="150px"
          >
            <Button
              size="sm"
              variant="ghost"
              colorScheme="red"
              onClick={handleLogout}
              w="full"
              zIndex={100000000000}
            >
              Çıxış et
            </Button>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default RightProfile;
