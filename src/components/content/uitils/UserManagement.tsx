import React from 'react';
import { Box, Heading, HStack, Button, Icon } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa6';
import { HiOutlineRefresh } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import type { CreateButtonProps } from './uitils/model';

const UserManagement: React.FC<CreateButtonProps> = ({
  createButtonLocation,
  onRefresh,
  dataLoading,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      w="100%"
      p="16px 24px"
      bg="#f5f5f5"
      borderRadius="8px"
      border="1px solid #dcdcdc"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        as="h2"
        fontSize="16px"
        fontWeight={500}
        color="#303030"
        letterSpacing="-0.1px"
      >
        İdarəetmə düymələri
      </Heading>

      <HStack spacing={2}>
        <Button
          leftIcon={<FaPlus />}
          bg="#303030"
          color="white"
          _hover={{ bg: '#363636' }}
          borderRadius="6px"
          px="18px"
          py="6px"
          fontWeight={500}
          onClick={() => navigate(createButtonLocation)}
        >
          Yarat
        </Button>

        <Button
          cursor={dataLoading ? 'no-drop' : 'pointer'}
          disabled={dataLoading}
          leftIcon={
            <Icon
              as={HiOutlineRefresh}
              w={5}
              h={5}
              sx={dataLoading ? { animation: 'spin 1s linear infinite' } : {}}
            />
          }
          bg="white"
          color="#303030"
          border="1px solid #dcdcdc"
          _hover={{ bg: '#f8f8f8' }}
          borderRadius="6px"
          px="18px"
          py="6px"
          onClick={() => onRefresh()}
        >
          {!dataLoading && 'Yenilə'}
        </Button>

        <style>
          {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
         `}
        </style>
      </HStack>
    </Box>
  );
};

export default UserManagement;
